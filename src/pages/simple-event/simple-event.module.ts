import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SimpleEventPage } from './simple-event';

@NgModule({
  declarations: [
    SimpleEventPage,
  ],
  imports: [
    IonicPageModule.forChild(SimpleEventPage),
  ],
})
export class SimpleEventPageModule {}
