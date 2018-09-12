/*
Import
*/
    // Angular
    import { NgModule } from "@angular/core";
    import { CommonModule } from "@angular/common";

    // Inner
    import { ScorePageComponent } from "./score-page.component";
    import { Router } from "./route";
//


/*
Définition
*/
    @NgModule({
        // Déclarer le composant
        declarations: [ ScorePageComponent ],

        // Injecter le/s module/s
        imports: [ CommonModule, Router ]
    })
//


/*
Export
*/
    export class Module{};
//