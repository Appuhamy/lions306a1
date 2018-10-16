import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DistrictOfficersPage } from './district-officers';

@NgModule({
  declarations: [
    DistrictOfficersPage,
  ],
  imports: [
    IonicPageModule.forChild(DistrictOfficersPage),
  ],
})
export class DistrictOfficersPageModule {}
