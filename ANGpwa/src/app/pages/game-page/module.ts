/*
Import
*/
    // Angular
    import { NgModule } from "@angular/core";
    import { CommonModule } from "@angular/common";

    // Inner
    import { GamePageComponent } from "./game-page.component";
    import { Router } from "./route";
//


/*
Définition
*/
    @NgModule({
        // Déclarer le composant
        declarations: [ GamePageComponent ],

        // Injecter le/s module/s
        imports: [ CommonModule, Router ]
    })
//


/*
Export
*/
    export class Module{};
//