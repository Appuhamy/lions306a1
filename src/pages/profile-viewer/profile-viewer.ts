import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  items;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  fetchData(){
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileViewerPage');
  }

}
