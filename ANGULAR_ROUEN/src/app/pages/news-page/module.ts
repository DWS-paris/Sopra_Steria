/*
Import
*/
    // Angular
    import { NgModule } from "@angular/core";
    import { CommonModule } from "@angular/common";
    import { FormsModule } from "@angular/forms";

    // Inner
    import { NewsPageComponent } from "./news-page.component";
    import { ComponentRouter } from "./route";
    import { HeaderModule } from "../../shared/header/module";
//


/*
Définition
*/
    @NgModule({
        declarations: [ NewsPageComponent ],
        imports: [ CommonModule, FormsModule, ComponentRouter, HeaderModule ]
    })
//


/*
Export
*/
    export class Module{};
//