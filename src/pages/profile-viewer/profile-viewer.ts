import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database'
import { Observable } from 'rxjs/observable';
import { FirebaseDatabase } from '@angular/fire';
import { FirebaseListObservable } from '@angular/fire/database-deprecated'
import { filter, map } from 'rxjs/operators';
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
  list;
  title;
  key;
  tasks;
  status = "regular";
  items: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  tempItems: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  regionsList = [
    'Region - 1',
    'Region - 2',
    'Region - 3',
    'Region - 4',
    'Region - 5',
    'Region - 6',
    'Region - 7',
  ];
  mdb: AngularFireDatabase;
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
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
  }
  init() {
    if (this.title === "Principle Office Bearers") {
      // this.app.getRootNav().push(ProfileViewerPage, {
      this.key = "principleOfficeBearers"
      // });
      this.items = this.mdb.list('officers/principleOfficeBearers').snapshotChanges();
      this.tempItems = this.items;
      this.tempItems.subscribe(i=>{
        console.log("Working");
        console.log(i);
      });
      console.log("ITEMS:");
      console.log(this.items instanceof Observable);
    }
    // } else if (this.title === "Gloabal Action Team") {
    //   this.key= "globalActionTeam"
    //   this.items = this.mdb.list('officers/globalActionTeam').valueChanges();
    // } else if (this.title === "Advisor of the Cabinet") {
    //   this.key= "advisorOfTheCabinet"
    //   this.items = this.mdb.list('officers/advisorOfTheCabinet').valueChanges();
    // } else if (this.title === "Region Chairpersons") {
    //   this.key="regionChairPersons"
    //   this.initRegions();
    //   // this.items = this.mdb.list('officers/regionChairPersons').valueChanges();
    // } else if (this.title === "Zone Chairpersons") {
    //   this.key="zoneChairPersons"
    //   this.items = this.mdb.list('officers/zoneChairPersons').valueChanges();
    // } else if (this.title === "District Chairpersons - LCI") {
    //   this.key="districtChairPersonsLci"
    //   this.items = this.mdb.list('officers/districtChairPersonsLci'). valueChanges();
    // } else if (this.title === "District Chairpersons") {
    //   this.key="districtChairPersons"
    //   this.items = this.mdb.list('officers/districtChairPersons').valueChanges();
    // } else if (this.title === "District Coordinators") {
    //   this.key="districtCoordinators"
    //   this.items = this.mdb.list('officers/districtCoordinators').valueChanges();
    // } else if (this.title === "District Coordiators - Environment") {
    //   this.key="districtCoordinatorEnvironment"
    //   this.items = this.mdb.list('officers/districtCoordinatorEnvironment').valueChanges();
    // } else if (this.title === "District Coordinators - Publicity") {
    //   this.key="districtCoordinatorPublicity"
    //   this.items = this.mdb.list('officers/districtCoordinatorPublicity').valueChanges();
    // } else if (this.title === "Club Officers") {
    //   this.key="clubOfficers"
    //   this.items = this.mdb.list('officers/clubOfficers').valueChanges();
    // }
  }

  initRegions() {
    this.status = "region";
  }
  getItems(ev) {
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
        map(i=>{
          i = i.filter(data =>{
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

}
