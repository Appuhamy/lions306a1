import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileViewerPage } from '../profile-viewer/profile-viewer';
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    if (item === "Principle Office Bearers") {
      this.navCtrl.push(ProfileViewerPage, {
        data: "principleOfficeBearers"
      });
    } else if (item === "Gloabal Action Team") {
      this.navCtrl.push(ProfileViewerPage, {
        data: "globalActionTeam"
      });
    } else if (item === "Advisor of the Cabinet") {
      this.navCtrl.push(ProfileViewerPage, {
        data: "advisorOfTheCabinet"
      });
    } else if (item === "Region Chairpersons") {
      this.navCtrl.push(ProfileViewerPage, {
        data: "regionChairPersons"
      });
    } else if (item === "Zone Chairpersons") {
      this.navCtrl.push(ProfileViewerPage, {
        data: "zoneChairPersons"
      });
    }else if (item === "District Chairpersons - LCI") {
      this.navCtrl.push(ProfileViewerPage, {
        data: "districtChairPersonsLci"
      });
    }else if (item === "District Chairpersons") {
      this.navCtrl.push(ProfileViewerPage, {
        data: "districtChairPersons"
      });
    }else if (item === "District Coordinators") {
      this.navCtrl.push(ProfileViewerPage, {
        data: "districtCoordinators"
      });
    }else if (item === "District Coordiators - Environment") {
      this.navCtrl.push(ProfileViewerPage, {
        data: "districtCoordinatorEnvironment"
      });
    }else if (item === "District Coordinators - Publicity") {
      this.navCtrl.push(ProfileViewerPage, {
        data: "districtCoordinatorPublicity"
      });
    }else if (item === "Club Officers") {
      this.navCtrl.push(ProfileViewerPage, {
        data: "clubOfficers"
      });
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DistrictOfficersPage');
  }

}
