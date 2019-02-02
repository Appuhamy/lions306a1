import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClubOfficersPage } from './club-officers';

@NgModule({
  declarations: [
    ClubOfficersPage,
  ],
  imports: [
    IonicPageModule.forChild(ClubOfficersPage),
  ],
})
export class ClubOfficersPageModule {}
