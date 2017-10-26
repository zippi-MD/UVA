import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//Providers
import { UserLocationProvider } from "../../providers/user-location/user-location";

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private userLoc: UserLocationProvider) {
    this.userLoc.get_location();
  }
}
