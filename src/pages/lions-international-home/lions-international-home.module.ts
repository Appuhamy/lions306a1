import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LionsInternationalHomePage } from './lions-international-home';

@NgModule({
  declarations: [
    LionsInternationalHomePage,
  ],
  imports: [
    IonicPageModule.forChild(LionsInternationalHomePage),
  ]
})
export class LionsInternationalHomePageModule {}
