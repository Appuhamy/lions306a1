import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LionsInternationalHomePage } from '../pages/lions-international-home/lions-international-home';
import{District306a1homePage}from '../pages/district306a1home/district306a1home'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LionsInternationalHomePage,
    District306a1homePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  exports: [],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LionsInternationalHomePage,
    District306a1homePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
