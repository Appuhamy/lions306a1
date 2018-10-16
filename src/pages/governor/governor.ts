import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the GovernorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-governor',
  templateUrl: 'governor.html',
})
export class GovernorPage {

  segemnt_one: string = "bio";
  isAndroid: boolean = false;

  
  constructor(platform: Platform,public navCtrl: NavController, public navParams: NavParams) {
    this.isAndroid = platform.is('android');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GovernorPage');
  }

}
