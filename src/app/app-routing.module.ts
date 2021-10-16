import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { PrinterComponent } from "./printer/printer.component";


const routes: Routes = [
    { path: "", redirectTo: "printer", pathMatch: "full" },
    { path: "printer", component: PrinterComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
