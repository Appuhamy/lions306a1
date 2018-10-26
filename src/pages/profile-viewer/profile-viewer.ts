import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database'
import { Observable } from 'rxjs/observable';
import { FirebaseDatabase } from '@angular/fire';
import { FirebaseListObservable } from '@angular/fire/database-deprecated'
import { filter, map } from 'rxjs/operators';
import { ViewChild } from '@angular/core';
import { Navbar, Searchbar, LoadingController } from 'ionic-angular';
/**
 * Generated class for the ProfileViewerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-viewer',
  templateUrl: 'profile-viewer.html',
})
export class ProfileViewerPage {
  @ViewChild(Navbar) navBar: Navbar;
  @ViewChild(Searchbar) searchBar: Searchbar;
  list;
  title;
  key;
  tasks;
  status = "regular";
  backLoop = "off";
  zonebackLoop = "off";
  zoneStatus = "off";
  previous = "none";
  clubStatus = "off";
  selectedClub = "none";
  loading;
  clubSegment: boolean = false;
  showSearchbar: boolean = true;
  searching: boolean = false;
  items: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  tempItems: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  regionsList = [
    'REGION – 1',
    'REGION – 2',
    'REGION – 3',
    'REGION – 4',
    'REGION – 5',
    'REGION – 6',
    'REGION – 7',
  ];

  zoneList = [];
  mdb: AngularFireDatabase;
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    this.title = navParams.get('data');
    // this.items=db.list("officers/",ref=>ref.child("principleOfficeBearers").orderByKey());
    // this.items = db.list('/officers/regionChairPersons');
    // this.db.object("officers/regionChairPersons").valueChanges().subscribe(
    //   data=>{
    //     console.log("Items:"+JSON.stringify(data)),
    //     this.items=data;
    //   }
    // );
    // console.log("Items2:"+this.items);
    this.mdb = db;
    this.init();

  }

  fetchData() {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileViewerPage');
    this.navBar.backButtonClick = (e: UIEvent) => {
      // todo something
      if (this.backLoop === "on") {
        this.status = "region";
        this.backLoop = "off";
        this.zoneStatus = "off";
        this.title = this.navParams.get('data');
        this.showSearchbar = false;
        console.log("REGION BACK");
      } else if (this.zonebackLoop === "on") {
        this.regionSelected(this.previous);
        this.zonebackLoop = "off";
        console.log("ZONE BACK");
        this.showSearchbar = false;
      } else if (this.clubSegment) {
        this.clubSegment = false;
        console.log("CLUB BACK");
        this.clubStatus = "on";
        this.init();
      }
      else {
        console.log(this.clubSegment)
        console.log("ALL BACK");
        this.navCtrl.pop();
      }

    }
  }
  init() {
    if (this.searching != true) {
      this.presentLoading();
    }
    if (this.title === "Principle Office Bearers") {
      // this.app.getRootNav().push(ProfileViewerPage, {
      this.key = "principleOfficeBearers"
      // });
      this.items = this.mdb.list('officers/principleOfficeBearers').snapshotChanges();
      this.tempItems = this.items;
      this.tempItems.subscribe(i => {
        console.log("Working");
        console.log(i);
      });
      console.log("ITEMS:");
      console.log(this.items instanceof Observable);
    } else if (this.title === "Gloabal Action Team") {
      this.key = "globalActionTeam"
      this.items = this.mdb.list('officers/globalActionTeam').snapshotChanges();
      this.tempItems = this.items;
    } else if (this.title === "Advisor of the Cabinet") {
      this.key = "advisorOfTheCabinet"
      this.items = this.mdb.list('officers/advisorOfTheCabinet').snapshotChanges();
      this.tempItems = this.items;
    } else if (this.title === "Region Chairpersons") {
      this.key = "regionChairPersons"
      this.initRegions();
      // this.items = this.mdb.list('officers/regionChairPersons').valueChanges();
    } else if (this.title === "Zone Chairpersons") {
      this.key = "zoneChairPersons"
      this.items = this.mdb.list('officers/zoneChairPersons').snapshotChanges();
      this.tempItems = this.items;
    } else if (this.title === "District Chairpersons - LCI") {
      this.key = "districtChairPersonsLci"
      this.items = this.mdb.list('officers/districtChairPersonsLci').snapshotChanges();
      this.tempItems = this.items;
    } else if (this.title === "District Chairpersons") {
      this.key = "districtChairPersons"
      this.items = this.mdb.list('officers/districtChairPersons').snapshotChanges();
      this.tempItems = this.items;
    } else if (this.title === "District Coordinators") {
      this.key = "districtCoordinators"
      this.items = this.mdb.list('officers/districtCoordinators').snapshotChanges();
      this.tempItems = this.items;
    } else if (this.title === "District Coordiators - Environment") {
      this.key = "districtCoordinatorEnvironment"
      this.items = this.mdb.list('officers/districtCoordinatorEnvironment').snapshotChanges();
      this.tempItems = this.items;
    } else if (this.title === "District Coordinators - Publicity") {
      this.key = "districtCoordinatorPublicity"
      this.items = this.mdb.list('officers/districtCoordinatorPublicity').snapshotChanges();
      this.tempItems = this.items;
    } else if (this.title === "Club Officers") {
      this.key = "clubOfficers"
      //this.items = this.mdb.list('officers/clubOfficers').snapshotChanges();
      //this.tempItems = this.items;
      this.initClub();
    }
    if (this.searching != true) {
      this.dismissLoading();
    }
  }

  initRegions() {
    this.status = "region";
    this.showSearchbar = false;
  }
  initClub() {
    this.clubStatus = "on";
    this.status = "none";
    this.items = this.mdb.list("officers/clubOfficers", ref => ref.orderByKey()).snapshotChanges();
    this.tempItems = this.items;
  }
  clubSelected(club) {
    this.selectedClub = club;
    this.clubStatus = "off";
    this.clubSegment = true;
    this.status = "regular";
    this.presentLoading();
    this.items = this.mdb.list("officers/clubOfficers/" + club, ref => ref.orderByKey()).snapshotChanges();
    this.tempItems = this.items;
    this.dismissLoading();

  }
  regionSelected(region) {
    this.showSearchbar = false;
    this.status = "regular";
    this.backLoop = "on";
    this.zoneStatus = "on";
    this.zonebackLoop = "off";
    this.title = region;
    this.presentLoading();
    this.items = this.mdb.list("officers/regionChairPersons", ref => ref.orderByChild('region').equalTo(region)).snapshotChanges();
    this.tempItems = this.items;
    this.zoneList = [];
    if (region == "REGION – 1") {
      this.zoneList.push("ZONE 1");
      this.zoneList.push("ZONE 2");
      this.zoneList.push("ZONE 3");
    } else if (region == "REGION – 2") {
      this.zoneList.push("ZONE 4");
      this.zoneList.push("ZONE 5");
      this.zoneList.push("ZONE 6");
    } else if (region == "REGION – 3") {
      this.zoneList.push("ZONE 7");
      this.zoneList.push("ZONE 8");
      this.zoneList.push("ZONE 9");
    } else if (region == "REGION – 4") {
      this.zoneList.push("ZONE 10");
      this.zoneList.push("ZONE 11");
      this.zoneList.push("ZONE 12");
    } else if (region == "REGION – 5") {
      this.zoneList.push("ZONE 13");
      this.zoneList.push("ZONE 14");
    } else if (region == "REGION – 6") {
      this.zoneList.push("ZONE 15");
      this.zoneList.push("ZONE 16");
    } else if (region == "REGION – 7") {
      this.zoneList.push("ZONE 17");
      this.zoneList.push("ZONE 18");
    }
    this.dismissLoading();
  }

  zoneSelected(zone) {
    this.showSearchbar = false;
    this.status = "regular";
    this.previous = this.title;
    this.backLoop = "off";
    this.zoneStatus = "off";
    this.zonebackLoop = "on";
    this.title = zone;
    this.presentLoading();
    this.items = this.mdb.list("officers/zoneChairPersons", ref => ref.orderByChild('zone').equalTo(zone)).snapshotChanges();
    this.tempItems = this.items;
    this.zoneList = [];
    this.dismissLoading();
  }

  getItems(ev) {
    this.searching = true;
    if (this.clubSegment) {
      this.items = this.mdb.list("officers/clubOfficers/" + this.selectedClub, ref => ref.orderByKey()).snapshotChanges();
      this.tempItems = this.items;
      var val = ev.target.value;
      if (val && val.trim() != '') {
        this.tempItems = this.items.pipe(
          map(i => {
            i = i.filter(data => {
              return (data.payload.val().name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            return i;
          })
        );
        this.tempItems.subscribe();
      } else {

      }
    } else if (this.clubStatus === "on") {
      this.items = this.mdb.list("officers/clubOfficers", ref => ref.orderByKey()).snapshotChanges();
      this.tempItems = this.items;
      var val = ev.target.value;
      if (val && val.trim() != '') {
        this.tempItems = this.items.pipe(
          map(i => {
            i = i.filter(data => {
              return (data.payload.key.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            return i;
          })
        );
        this.tempItems.subscribe();
      }
    } else {
      // Reset items back to all of the items
      this.init();
      // set val to the value of the ev target
      var val = ev.target.value;
      if (val && val.trim() != '') {
        // if the value is an empty string don't filter the items
        // this.items = this.mdb.list('officers/principleOfficeBearers', ref => ref.orderByChild('name').startAt(val).endAt(val + "\uf8ff")).snapshotChanges();
        // this.items.pipe(filter((item) => {
        //   return (item.values.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        // }));
        this.tempItems = this.items.pipe(
          //filter(item=>{
          //return (item[0].payload.val().name.toLowerCase().indexOf(val.toLowerCase()) > -1);
          //console.log(item[0].payload.val());
          //return true;
          //})
          map(i => {
            i = i.filter(data => {
              return (data.payload.val().name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            return i;
          })
        );
        this.tempItems.subscribe();
        //this.tempItems.subscribe(i=>{
        // console.log(i);
        //});
        //this.items.subscribe((item)=>{
        //  console.log(item[0].payload.val());
        //});
        //this.items = this.items.filter((item) => {
        //  return (item.values.name.indexOf(val.toLowerCase()) > -1);
        // });
      }
    }
    this.searching = false;
  }
  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }
  dismissLoading() {
    this.loading.dismiss();
  }

}

