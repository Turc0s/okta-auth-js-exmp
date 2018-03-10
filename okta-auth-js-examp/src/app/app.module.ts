import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';

// Okta Guard and Service
import { OktaAuthGuard } from "./shared/app.guard";
import { OktaAuthService } from "./shared/service.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
