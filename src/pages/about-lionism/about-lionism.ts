import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutLionismPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about-lionism',
  templateUrl: 'about-lionism.html',
})
export class AboutLionismPage {

  items=[
    'Lions International Purpose',
    'Lions International',
    'Hellen Keller',
    'Lions Code of Ethics',
    'Association Name and Symbol',
    'LCIF and Lions Reach Millions People'
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutLionismPage');
  }
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

}
