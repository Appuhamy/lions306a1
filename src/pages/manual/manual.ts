import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database'
import { Observable } from 'rxjs/observable';
import { FirebaseDatabase } from '@angular/fire';
import { FirebaseListObservable } from '@angular/fire/database-deprecated'
import { filter, map } from 'rxjs/operators';
import { ViewChild } from '@angular/core';
import { Navbar, Searchbar, LoadingController,App } from 'ionic-angular';
import { ClubOfficersPage } from '../club-officers/club-officers';

/**
 * Generated class for the ManualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manual',
  templateUrl: 'manual.html',
})
export class ManualPage {
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
  mdb: AngularFireDatabase;

  constructor(private app: App,public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    this.mdb = db;
    this.initClub();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManualPage');
  }
  initClub() {
    if (this.searching != true) {
      this.presentLoading();
    }
    this.clubStatus = "on";
    this.status = "none";
    this.items = this.mdb.list("officers/clubOfficers", ref => ref.orderByKey()).snapshotChanges();
    this.tempItems = this.items;
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
      this.initClub();
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
  clubSelected(club) {
    this.selectedClub = club;
    this.clubStatus = "off";
    this.clubSegment = true;
    this.status = "regular";
    this.app.getRootNav().push(ClubOfficersPage, {
      data: club
    });
    // this.presentLoading();
    // this.items = this.mdb.list("officers/clubOfficers/" + club, ref => ref.orderByKey()).snapshotChanges();
    // this.tempItems = this.items;
    // this.dismissLoading();
  }

}
