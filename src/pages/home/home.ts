import { Component } from '@angular/core';
import { LionsInternationalHomePage } from '../lions-international-home/lions-international-home'
import { District306a1homePage } from '../district306a1home/district306a1home'
import { AboutLionismPage } from '../about-lionism/about-lionism'
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database'
import { Observable } from 'rxjs/observable';
import { FirebaseDatabase } from '@angular/fire';
import { FirebaseListObservable } from '@angular/fire/database-deprecated'
import { filter, map } from 'rxjs/operators';
import { ViewChild } from '@angular/core';
import { Navbar, Searchbar, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  tempItems: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  key;
  mdb: AngularFireDatabase;
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    this.mdb = db;
    this.init();
  }

  init() {
    this.items = this.mdb.list('Notifications').snapshotChanges();
    this.tempItems = this.items;
    this.tempItems.subscribe(i => {
      console.log("Working");
      console.log(i);
    });
    console.log("ITEMS:");
    console.log(this.items instanceof Observable);
  }
  goToLionsInternational() {
    this.navCtrl.push(LionsInternationalHomePage)
  }
  tapEvent(para: any) {
    this.goToLionsInternational();
  }
  goToLionsDistrict306a1() {
    this.navCtrl.push(District306a1homePage);
  }
  tapDistrict(para: any) {
    this.goToLionsDistrict306a1();
  }
  tapLionsm(para: any) {
    this.goToLionism();
  }
  goToLionism() {
    this.navCtrl.push(AboutLionismPage);
  }

}
