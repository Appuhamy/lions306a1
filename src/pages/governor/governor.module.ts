import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GovernorPage } from './governor';

@NgModule({
  declarations: [
    GovernorPage,
  ],
  imports: [
    IonicPageModule.forChild(GovernorPage),
  ],
})
export class GovernorPageModule {}
