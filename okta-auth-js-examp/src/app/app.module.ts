import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';

// Okta Guard and Service
import { OktaAuthGuard } from "./shared/app.guard";
import { OktaAuthService } from "./shared/service.service";
import { CallbackComponent } from './callback/callback.component';
import { ProtectedComponent } from './protected/protected.component';

const appRoutes: Routes = [
  { path: "callback", component: CallbackComponent },
  { path: "protected", component: ProtectedComponent, canActivate: [ OktaAuthGuard ] },
];


@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ OktaAuthGuard, OktaAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
