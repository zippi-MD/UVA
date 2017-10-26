import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//Pages
import { CercaDeMiPage } from "../pages/cerca-de-mi/cerca-de-mi";
import { SliderPage } from "../pages/slider/slider";
import { EventsPage } from "../pages/events/events";
import { SimpleEventPage } from "../pages/simple-event/simple-event";
import { SpecialPage } from "../pages/special/special";

//PLugins
import { Geolocation } from '@ionic-native/geolocation';
import { InAppBrowser } from '@ionic-native/in-app-browser';

export const firebaseConfig = {
  apiKey: "AIzaSyCNbTUClYbHJHUhpgc-v5u41z6m6OSnAvo",
  authDomain: "gag-2c51a.firebaseapp.com",
  databaseURL: "https://gag-2c51a.firebaseio.com",
  projectId: "gag-2c51a",
  storageBucket: "gag-2c51a.appspot.com",
  messagingSenderId: "1060851362568"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CercaDeMiPage,
    SliderPage,
    EventsPage,
    SimpleEventPage,
    SpecialPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CercaDeMiPage,
    SliderPage,
    EventsPage,
    SimpleEventPage,
    SpecialPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    Geolocation,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
