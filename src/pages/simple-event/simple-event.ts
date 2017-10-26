import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-simple-event',
  templateUrl: 'simple-event.html',
})
export class SimpleEventPage {
  info: any;
  title: string;
  all_data: any;
  simple = {description: "", img: "", info_link: []};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.all_data = this.navParams.data;
    console.log(this.all_data.info);
    this.title = this.all_data.title;
    this.info = this.all_data.info;
    console.log(this.info);

    if(this.info.info_link != 'false'){

      this.simple.info_link.push(true, this.info.info_link);

    }else{

      this.simple.info_link.push(false, this.info.info_link);

    }




  }

}
