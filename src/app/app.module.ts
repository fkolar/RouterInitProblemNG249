import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {MyCoreModule} from "./core/my-core.module";
import {TestAppModule} from "./test/test-app.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TestAppModule, // import actuall app
    MyCoreModule // import core as we are injecting RoutingService into AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


  constructor() {
    console.log("Constructor AppModule")
  }
}
