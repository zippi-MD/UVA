import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-special',
  templateUrl: 'special.html',
})
export class SpecialPage {
  all_data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.all_data = this.navParams.data;
  }


}
