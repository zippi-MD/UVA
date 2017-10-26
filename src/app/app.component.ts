import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Pages
import { HomePage } from '../pages/home/home';
import { CercaDeMiPage } from "../pages/cerca-de-mi/cerca-de-mi";
import { MapsPage } from "../pages/maps/maps";



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  cerca_de_mi:any = CercaDeMiPage;
  maps:any = MapsPage;
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page:any){
    this.rootPage = page;
  }
}

