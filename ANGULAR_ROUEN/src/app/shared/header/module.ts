/*
Import
*/
    // Angular
    import { NgModule } from "@angular/core";
    import { CommonModule } from "@angular/common";
    import { RouterModule } from "@angular/router";

    // Inner
    import { HeaderComponent } from "./header.component";
//


/*
Définition
*/
    @NgModule({
        declarations: [ HeaderComponent ],
        imports:[ CommonModule, RouterModule ],
        exports: [ HeaderComponent ]
    })
//


/*
Export
*/
    export class HeaderModule{};
//