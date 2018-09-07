/*
Import
*/
    // Angular
    import { NgModule } from "@angular/core";
    import { CommonModule } from "@angular/common"; //=> Obligatoire pour ngClass, ngIf, ...

    // Inner
    import { SingleUserPageComponent } from "./single-user-page.component";
    import { ComponentRouter } from "./route";
    import { HeaderModule } from "../../shared/header/module";
//


/*
Définition
*/
    @NgModule({
        declarations: [ SingleUserPageComponent ],
        imports: [ ComponentRouter, CommonModule, HeaderModule ]
    })
//


/*
Export
*/
    export class Module{};
//