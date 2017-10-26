import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

//Pages
import { SliderPage } from "../slider/slider";
import { EventsPage } from "../events/events";
import { SimpleEventPage } from "../simple-event/simple-event";

//Firebase
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {SpecialPage} from "../special/special";

@IonicPage()
@Component({
  selector: 'page-cerca-de-mi',
  templateUrl: 'cerca-de-mi.html',
})
export class CercaDeMiPage {
  lugar: string;
  uva_lugar:string[];
  simple: any;
  slider: any;
  events: any;
  special: any;
  uva_publicaciones: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afDB: AngularFireDatabase, private iab: InAppBrowser) {
    this.lugar = this.navParams.data;
    this.uva_lugar = this.lugar.split(",");

    this.simple = SimpleEventPage;
    this.slider = SliderPage;
    this.events = EventsPage;
    this.special = SpecialPage;


    this.uva_publicaciones = afDB.list(this.uva_lugar[0]).valueChanges();

  }

  uva_pagina(publicacion: any){
    if(publicacion.type == 'simple'){
      this.navCtrl.push(this.simple, publicacion);
    }
    else if(publicacion.type == 'slider'){
      this.navCtrl.push(this.slider, publicacion);
    }
    else if(publicacion.type == 'events'){
      console.log(publicacion);
      this.navCtrl.push(this.events, publicacion);
    }
    else if(publicacion.type == 'special'){
      this.iab.create(publicacion.info.info_link, '_blank','location=no,zoom=no');
    }
  }



}
