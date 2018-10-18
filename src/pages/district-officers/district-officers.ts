import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, IonicApp } from 'ionic-angular';
import { ProfileViewerPage } from '../profile-viewer/profile-viewer';
import { App } from 'ionic-angular';
/**
 * Generated class for the DistrictOfficersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-district-officers',
  templateUrl: 'district-officers.html',
})
export class DistrictOfficersPage {
  items;
  constructor(private app: App,public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }
  initializeItems() {
    this.items = [
      'Principle Office Bearers',
      'Gloabal Action Team',
      'Advisor of the Cabinet',
      'Region Chairpersons',
      'Zone Chairpersons',
      'District Chairpersons - LCI',
      'District Chairpersons',
      'District Coordinators',
      'District Coordiators - Environment',
      'District Coordinators - Publicity',
      'Club Officers',
    ];
  }
  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  itemSelected(item) {
    this.app.getRootNav().push(ProfileViewerPage, {
      data: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DistrictOfficersPage');
  }

}
