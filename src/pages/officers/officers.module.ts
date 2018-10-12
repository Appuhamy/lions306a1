import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfficersPage } from './officers';

@NgModule({
  declarations: [
    OfficersPage,
  ],
  imports: [
    IonicPageModule.forChild(OfficersPage),
  ],
})
export class OfficersPageModule {}
