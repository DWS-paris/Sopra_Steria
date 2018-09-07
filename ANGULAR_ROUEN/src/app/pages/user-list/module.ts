/*
Import
*/
    // Angular
    import { NgModule } from "@angular/core";
    import { CommonModule } from "@angular/common"; //=> Obligatoire pour ngClass, ngIf, ...

    // Inner
    import { UserListComponent } from "./user-list.component";
    import { ComponentRouter } from "./route";
    import { HeaderModule } from "../../shared/header/module";
//


/*
Définition
*/
    @NgModule({
        declarations: [ UserListComponent ],
        imports: [ ComponentRouter, CommonModule, HeaderModule ]
    })
//


/*
Export
*/
    export class Module{};
//