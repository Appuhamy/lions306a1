import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the District306a1Page tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-district306a1',
  templateUrl: 'district306a1.html'
})
export class District306a1Page {

  governorRoot = 'GovernorPage'
  officersRoot = 'OfficersPage'
  manualRoot = 'ManualPage'


  constructor(public navCtrl: NavController) {}

}
