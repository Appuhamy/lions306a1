import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the District306a1homePage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-district306a1home',
  templateUrl: 'district306a1home.html'
})
export class District306a1homePage {

  governorRoot = 'GovernorPage'
  districtOfficersRoot = 'DistrictOfficersPage'
  manualRoot = 'ManualPage'


  constructor(public navCtrl: NavController) {}
  goBack() {
    this.navCtrl.pop();
  }
  tapEvent(para: any) {
    this.goBack();
  }
}
