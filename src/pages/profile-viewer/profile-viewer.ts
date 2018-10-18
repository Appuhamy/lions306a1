import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { Observable } from 'rxjs-compat';
import { FirebaseDatabase } from '@angular/fire';
import { FirebaseListObservable } from '@angular/fire/database-deprecated'
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
  key:string="";
  tasks;
  status="regular";
  items: Observable<any[]>;
  regionsList=[
    'Region - 1',
    'Region - 2',
    'Region - 3',
    'Region - 4',
    'Region - 5',
    'Region - 6',
    'Region - 7',
  ];
  mdb:AngularFireDatabase;
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
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
    this.mdb=db;
    this.init();
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
      this.items = this.mdb.list('officers/principleOfficeBearers').valueChanges();
    } else if (this.title === "Gloabal Action Team") {
      // key = "globalActionTeam"
      this.items = this.mdb.list('officers/globalActionTeam').valueChanges();
    } else if (this.title === "Advisor of the Cabinet") {
      // key = "advisorOfTheCabinet"
      this.items = this.mdb.list('officers/advisorOfTheCabinet').valueChanges();
    } else if (this.title === "Region Chairpersons") {
      // key = "regionChairPersons"
      this.initRegions();
      // this.items = this.mdb.list('officers/regionChairPersons').valueChanges();
    } else if (this.title === "Zone Chairpersons") {
      // key = "zoneChairPersons"
      this.items = this.mdb.list('officers/zoneChairPersons').valueChanges();
    } else if (this.title === "District Chairpersons - LCI") {
      // key = "districtChairPersonsLci"
      this.items = this.mdb.list('officers/districtChairPersonsLci').valueChanges();
    } else if (this.title === "District Chairpersons") {
      // key = "districtChairPersons"
      this.items = this.mdb.list('officers/districtChairPersons').valueChanges();
    } else if (this.title === "District Coordinators") {
      // key = "districtCoordinators"
      this.items = this.mdb.list('officers/districtCoordinators').valueChanges();
    } else if (this.title === "District Coordiators - Environment") {
      // key = "districtCoordinatorEnvironment"
      this.items = this.mdb.list('officers/districtCoordinatorEnvironment').valueChanges();
    } else if (this.title === "District Coordinators - Publicity") {
      // key = "districtCoordinatorPublicity"
      this.items = this.mdb.list('officers/districtCoordinatorPublicity').valueChanges();
    } else if (this.title === "Club Officers") {
      // key = "clubOfficers"
      this.items = this.mdb.list('officers/clubOfficers').valueChanges();
    }
  }

  initRegions(){
    this.status="region";
  }
}
