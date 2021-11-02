import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";
import { WebViewExtModule } from "@nota/nativescript-webview-ext/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from './components/home/home.component';
import { MainEditorComponent } from './components/main-editor/main-editor.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        WebViewExtModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        MainEditorComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
