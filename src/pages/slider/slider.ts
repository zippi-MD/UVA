import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Plugin
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {
  info: any;
  slides = [];
  show_link: boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
    this.info = this.navParams.data;
    console.log(this.info);

    for(let i = 0; i < this.info.info.length; i++){
      if(this.info.info[i].info_link != 'false'){

        this.slides.push({title: this.info.info[i].title, description: this.info.info[i].description,
                           img: this.info.info[i].img, info_link: this.info.info[i].info_link});
        this.show_link = true;

      }else{
         this.slides.push({title: this.info.info[i].title, description: this.info.info[i].description,
                          img: this.info.info[i].img, info_link: this.info.info[i].info_link});
        this.show_link = false;
      }
    }

  }

  open_link(url:string){
    this.iab.create(url, "_system");
  }


}
