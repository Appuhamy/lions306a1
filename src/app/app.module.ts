import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LionsInternationalHomePage } from '../pages/lions-international-home/lions-international-home';
import{District306a1homePage}from '../pages/district306a1home/district306a1home'
import{ProfileViewerPage} from '../pages/profile-viewer/profile-viewer'
import{AboutLionismContentPage} from '../pages/about-lionism-content/about-lionism-content'
import{AboutLionismPage} from '../pages/about-lionism/about-lionism'
import{ClubOfficersPage} from '../pages/club-officers/club-officers'
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


export const config = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDSlb6ASgpa3eD8WW2Bif60DeyAKLuiqbU',
    authDomain: 'lions-district-306-a1.firebaseapp.com',
    databaseURL: 'https://lions-district-306-a1.firebaseio.com',
    projectId: 'lions-district-306-a1',
    storageBucket: 'lions-district-306-a1.appspot.com',
    messagingSenderId: '951430074738'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LionsInternationalHomePage,
    District306a1homePage,
    ProfileViewerPage,
    AboutLionismPage,
    AboutLionismContentPage,
    ClubOfficersPage
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config.firebase),
    IonicModule.forRoot(MyApp),
  ],
  exports: [],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LionsInternationalHomePage,
    District306a1homePage,
    ProfileViewerPage,
    AboutLionismPage,
    AboutLionismContentPage,
    ClubOfficersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
