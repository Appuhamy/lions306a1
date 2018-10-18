import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{AngularFireDatabase,AngularFireList }from '@angular/fire/database'
import { Observable } from 'rxjs-compat';
import { FirebaseDatabase } from '@angular/fire';
import{FirebaseListObservable}from '@angular/fire/database-deprecated'
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
  list;
  title;
  tasks;
  items: Observable<any[]>
  constructor(public navCtrl: NavController, public navParams: NavParams,public db:AngularFireDatabase) {
    this.title = navParams.get('data');
    // this.items=db.list("officers/",ref=>ref.child("principleOfficeBearers").orderByKey());
    // this.items = db.list('/officers/regionChairPersons');
    // this.db.object("officers/regionChairPersons").valueChanges().subscribe(
    //   data=>{
    //     console.log("Items:"+JSON.stringify(data)),
    //     this.items=data;
    //   }
    // );
    // console.log("Items2:"+this.items);
    this.items = db.list('officers/principleOfficeBearers').valueChanges();
  }

  fetchData() {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileViewerPage');
  }
  init() {
    if (this.title === "Principle Office Bearers") {
      // this.app.getRootNav().push(ProfileViewerPage, {
        //data: "principleOfficeBearers"
      // });
    } else if (this.title === "Gloabal Action Team") {
        //data: "globalActionTeam"
    } else if (this.title === "Advisor of the Cabinet") {
        //data: "advisorOfTheCabinet"      
    } else if (this.title === "Region Chairpersons") {
        //data: "regionChairPersons"
    } else if (this.title === "Zone Chairpersons") {
        //data: "zoneChairPersons"
    } else if (this.title === "District Chairpersons - LCI") {
       // data: "districtChairPersonsLci"
    } else if (this.title === "District Chairpersons") {
        //data: "districtChairPersons"
    } else if (this.title === "District Coordinators") {
        //data: "districtCoordinators"
    } else if (this.title === "District Coordiators - Environment") {
        //data: "districtCoordinatorEnvironment"
    } else if (this.title === "District Coordinators - Publicity") {
        //data: "districtCoordinatorPublicity"
    } else if (this.title === "Club Officers") {
        //data: "clubOfficers"
    }
  }
}
