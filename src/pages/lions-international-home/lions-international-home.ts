import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
/**
 * Generated class for the LionsInternationalHomePage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lions-international-home',
  templateUrl: 'lions-international-home.html'
})
export class LionsInternationalHomePage {

  officersRoot = 'OfficersPage'
  presidentRoot = 'PresidentPage'
  contactRoot = 'ContactPage'


  constructor(public navCtrl: NavController) { }
  goBack() {
    this.navCtrl.pop();
  }
  tapEvent(para: any) {
    this.goBack();
  }
}
