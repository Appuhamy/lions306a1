import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutLionismContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about-lionism-content',
  templateUrl: 'about-lionism-content.html',
})
export class AboutLionismContentPage {

  title;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutLionismContentPage');
  }

}
