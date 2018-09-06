/*
Import
*/
    // Angular
    import { NgModule } from "@angular/core";
    import { FormsModule } from "@angular/forms"; //=> Obligatoire pour l'utilisation du [(ngModel)]

    // Inner
    import { HomePageComponent } from "./home-page.component";
    import { ComponentRouter } from "./route";
    import { HeaderModule } from "../../shared/header/module";
//


/*
Définition
*/
    @NgModule({
        declarations: [ HomePageComponent ],
        imports: [ ComponentRouter, FormsModule, HeaderModule ]
    })
//


/*
Export
*/
    export class Module{};
//