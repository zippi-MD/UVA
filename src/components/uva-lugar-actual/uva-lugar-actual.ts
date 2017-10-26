import { Component } from '@angular/core';


@Component({
  selector: 'uva-lugar-actual',
  templateUrl: 'uva-lugar-actual.html'
})
export class UvaLugarActualComponent {

  text: string;

  constructor() {
    console.log('Hello UvaLugarActualComponent Component');
    this.text = 'Hello World';
  }

}
