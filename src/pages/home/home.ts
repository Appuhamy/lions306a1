import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'
import {LionsInternationalHomePage} from '../lions-international-home/lions-international-home'
import{District306a1homePage}from'../district306a1home/district306a1home'
import{AboutLionismPage}from'../about-lionism/about-lionism'
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
  tapLionsm(para: any){
    this.goToLionism();
  }
  goToLionism(){
    this.navCtrl.push(AboutLionismPage);
  }

}
