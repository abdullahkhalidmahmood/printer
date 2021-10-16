import { Component, OnInit } from '@angular/core';
import { Observable, ObservableArray } from '@nativescript/core';
import { Hprt, HPRTPrinter } from 'nativescript-hprt';
import { SPPrinter, StarPrinter } from 'nativescript-star-printer';
import * as AppSettings from '@nativescript/core/application-settings';

@Component({
    selector: 'ns-printer',
    templateUrl: './printer.component.html',
    styleUrls: ['./printer.component.css']
})
export class PrinterComponent extends Observable {

    private static LOADING_KEY = "isLoading";
    private static SELECTED_PRINTER_KEY = "selectedPrinterPort";
    private static LAST_CONNECTED_PORT_KEY = "lastConnectedPrinterPort";

    public message: string;
    public isLoading: boolean = false;
    private starPrinter: StarPrinter;
    public printers: ObservableArray<SPPrinter> = new ObservableArray<SPPrinter>();
    private selectedPrinterPort: string;
    private lastConnectedPrinterPort: string;

    constructor() {
      super();

      this.starPrinter = new StarPrinter();
      this.set("message", "Search and select a printer");
      this.set(
        PrinterComponent.LAST_CONNECTED_PORT_KEY,
        AppSettings.getString(PrinterComponent.LAST_CONNECTED_PORT_KEY, null));
    }

    public doSearchPrinters(): void {
      // reset
      this.printers.splice(0, this.printers.length);
      this.set(PrinterComponent.SELECTED_PRINTER_KEY, undefined);
      this.set("message", "Search and select a printer");

      this.set(PrinterComponent.LOADING_KEY, true);

      // search
      this.starPrinter.searchPrinters().then(
        (printers: Array<SPPrinter>) => {
          this.set(
            PrinterComponent.LAST_CONNECTED_PORT_KEY,
            AppSettings.getString(PrinterComponent.LAST_CONNECTED_PORT_KEY, null));
          console.log("Found printers: " + JSON.stringify(printers));
          this.printers.push(printers);
          this.set(PrinterComponent.LOADING_KEY, false);
        }, (err: string) => {
          console.log("Search printers error: " + JSON.stringify(err));
        });
    }

    public onPrinterTap(args): void {
      this.selectedPrinterPort = this.printers.getItem(args.index).portName;
      this.set("message", `Selected: ${this.selectedPrinterPort}`);
      AppSettings.setString(PrinterComponent.LAST_CONNECTED_PORT_KEY, this.selectedPrinterPort);
    }



}
