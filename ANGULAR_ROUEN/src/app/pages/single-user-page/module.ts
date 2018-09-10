/*
Import
*/
    // Angular
    import { NgModule } from "@angular/core";
    import { CommonModule } from "@angular/common"; //=> Obligatoire pour ngClass, ngIf, ...
    import { FormsModule } from "@angular/forms"; //=> Obligatoire pour [(ngModel)]

    // Inner
    import { SingleUserPageComponent } from "./single-user-page.component";
    import { ComponentRouter } from "./route";
    import { HeaderModule } from "../../shared/header/module";
    import { UserFormModule } from "../../shared/user-form/module";
//


/*
Définition
*/
    @NgModule({
        declarations: [ SingleUserPageComponent ],
        imports: [ ComponentRouter, CommonModule, FormsModule, HeaderModule, UserFormModule ]
    })
//


/*
Export
*/
    export class Module{};
//