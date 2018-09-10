/*
Import
*/
    // Angular
    import { NgModule } from "@angular/core";
    import { FormsModule } from "@angular/forms"; //=> Obligatoire pour l'utilisation du [(ngModel)]
    import { CommonModule } from "@angular/common"; //=> Obligatoire pour ngClass, ngIf, ...

    // Inner
    import { HomePageComponent } from "./home-page.component";
    import { ComponentRouter } from "./route";
    import { HeaderModule } from "../../shared/header/module";
    import { UserFormModule } from "../../shared/user-form/module";
//


/*
Définition
*/
    @NgModule({
        declarations: [ HomePageComponent ],
        imports: [ ComponentRouter, FormsModule, CommonModule, HeaderModule, UserFormModule ]
    })
//


/*
Export
*/
    export class Module{};
//