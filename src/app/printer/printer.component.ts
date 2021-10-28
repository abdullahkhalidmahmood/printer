import { Component, OnInit } from '@angular/core';
import { Observable, ObservableArray } from '@nativescript/core';
import { Hprt, HPRTPrinter } from 'nativescript-hprt';
import { SPPrinter, StarPrinter } from 'nativescript-star-printer';
import * as AppSettings from '@nativescript/core/application-settings';
import { registerElement } from '@nativescript/angular';
registerElement(
  'Fab',
  () => require('@nstudio/nativescript-floatingactionbutton').Fab
);
@Component({
  selector: 'ns-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.css']
})
export class PrinterComponent {

  public items = [
    { name: "Note 1"},
    { name: "Note 2"},
    { name: "Note 3"},
    { name: "Note 4"},
    { name: "Note 5"},
    { name: "Note 6"},
    { name: "Note 7"},
    { name: "Note 8"},
    

  ]


  constructor() { }




}
