/*
Import
*/
    // Angular
    import { NgModule } from "@angular/core";

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
        imports: [ ComponentRouter, HeaderModule ]
    })
//


/*
Export
*/
    export class Module{};
//