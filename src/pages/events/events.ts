import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Pages
import { SimpleEventPage } from "../simple-event/simple-event";


@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  info: any;
  all_data: any;
  title: string;
  events = [];
  simple: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.all_data = this.navParams.data;
    this.info = this.all_data.info;

    this.title = this.all_data.title;


    for(let i = 0; i < this.info.length; i++){
      if(this.info[i].info != 'false'){
        this.events.push({
          title: this.info[i].title,
          date: this.info[i].date,
          time: this.info[i].time,
          img: this.info[i].img,
          info: this.info[i].info,
          show_info_button: true
        });
      }else{
        this.events.push({
          title: this.info[i].title,
          date: this.info[i].date,
          time: this.info[i].time,
          img: this.info[i].img,
          info: this.info[i].info,
          show_info_button: false
        });
      }

    }

  }

  openSimple(item: any){
    this.navCtrl.push(SimpleEventPage, item);
  }


}
