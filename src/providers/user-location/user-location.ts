import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { LoadingController } from "ionic-angular";

//Plugins
import { Geolocation } from "@ionic-native/geolocation";


@Injectable()
export class UserLocationProvider {
  coordenadasGeolocalizacion = [];
  ubicacion_latitud = 123;
  ubicacion_longitud = 321;
  uva_lugar: string;
  uva_distancia;
  cerca_de_mi: any;

  constructor(public http: Http, private loadingCtrl: LoadingController, private geolocation: Geolocation) {
    console.log('Hello UserLocationProvider Provider');
  }

  get_location(){

    let loader = this.loadingCtrl.create({
      content: "Obteniendo Ubicación...",

    });
    loader.present();

    this.geolocation.getCurrentPosition().then((resp) => {

      loader.dismiss();
      console.log(resp.coords.latitude);
      this.ubicacion_latitud = resp.coords.latitude;
      console.log(resp.coords.longitude);
      this.ubicacion_longitud = resp.coords.longitude;

    }).catch((error) => {
      console.log('Error obteniendo la ubicación del dispositivo', error);

      loader.dismiss()

    });

  }

  distancia_entre_coordenadas(lat1, lon1, lat2, lon2){
    let R = 6371; // km (This is the constant for km)
    let dLat = (lat2 - lat1) * Math.PI / 180;
    let dLon = (lon2 - lon1) * Math.PI / 180;
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    if (d > 1) return Math.round(d * 1000);
    else if (d <= 1) return Math.round(d * 1000);
    return d;
  }

  comparator(a, b) {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
  }

  meter_to_km(distance) {
    if (distance.toString().length > 3) {
      distance = Math.round(distance / 1000);
      return distance + ' Kilometros';
    } else {
      return distance + ' Metros';
    }
  }

  uva_lugar_mas_cercano(x_coordinate, y_coordinate){

    let distance_from_places = [];
    let max_distance = 2500;

    console.log('Calculando las distancias.');
    for (let counter = 0; counter < this.coordenadasGeolocalizacion.length; counter++) {
      let distance_value = this.distancia_entre_coordenadas(x_coordinate, y_coordinate, this.coordenadasGeolocalizacion[counter][1], this.coordenadasGeolocalizacion[counter][2]);
      distance_from_places.push([distance_value, this.coordenadasGeolocalizacion[counter][0]]);
    }

    distance_from_places = distance_from_places.sort(this.comparator)
    console.log(distance_from_places[0][1])

    if(distance_from_places[0][0] < max_distance){
      this.uva_lugar = distance_from_places[0][1];
      this.uva_distancia = this.meter_to_km(distance_from_places[0][0]);
    }
    else {
      this.uva_lugar = 'default';
    }

    this.navCtrl.setRoot(this.cerca_de_mi, this.uva_lugar);
    console.log(distance_from_places)

    return distance_from_places;

  }




}
