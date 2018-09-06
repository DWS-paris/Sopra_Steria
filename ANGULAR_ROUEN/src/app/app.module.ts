/*
Import
*/
  // Angular
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { FormsModule } from "@angular/forms";
  import { RouterModule } from '@angular/router';

  // Inner
  import { AppComponent } from './app.component';
  import { AppRouterModule } from "./app.router";
//

/*
Configuration en export
*/
  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule, FormsModule, AppRouterModule, RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent] 
  })
  export class AppModule { }
//