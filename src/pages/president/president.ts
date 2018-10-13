import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the PresidentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-president',
  templateUrl: 'president.html',
})
export class PresidentPage {
 
  segemnt_one: string = "theme";
  segemnt_two: string = "pMessage";
  isAndroid: boolean = false;

  
  constructor(platform: Platform,public navCtrl: NavController, public navParams: NavParams) {
    this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresidentPage');
  }

  
}
