import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'
import {LionsInternationalHomePage} from '../lions-international-home/lions-international-home'
import{District306a1homePage}from'../district306a1home/district306a1home'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

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

}
