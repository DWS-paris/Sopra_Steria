/*
Import
*/
    // Angular
    import { NgModule } from "@angular/core";
    import { CommonModule } from "@angular/common";
    import { FormsModule } from "@angular/forms";

    // Inner
    import { UserFormComponent } from "./user-form.component";
//


/*
Définition
*/
    @NgModule({
        declarations: [ UserFormComponent ],
        imports:[ CommonModule, FormsModule ],
        exports: [ UserFormComponent ] //=> Pour utiliser le composant dans plusieurs pages
    })
//


/*
Export
*/
    export class UserFormModule{};
//