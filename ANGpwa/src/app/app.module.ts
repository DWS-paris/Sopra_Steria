/*
Import
*/
  // Angular
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { RouterModule } from "@angular/router";
  import { HttpClientModule } from "@angular/common/http";

  // Outter
  import { CookieService } from 'ngx-cookie-service'; //=> Gestion des cookies

  // Inner
  import { AppComponent } from './app.component';
  import { MainRouter } from "./app.router";
//

/*
Definition
*/
  @NgModule({
    declarations: [
      AppComponent,
    ],
    imports: [
      BrowserModule, RouterModule, HttpClientModule, MainRouter
    ],
    providers: [ CookieService ],
    bootstrap: [ AppComponent ]
  })
//

/*
Export
*/
  export class AppModule { }
//