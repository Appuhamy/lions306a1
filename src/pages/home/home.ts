import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'
import {LionsInternationalHomePage} from '../lions-international-home/lions-international-home'

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

}
