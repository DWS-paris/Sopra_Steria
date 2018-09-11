/*
Import
*/
    // Angular
    import { NgModule } from "@angular/core";

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
        imports: [ Router ]
    })
//


/*
Export
*/
    export class Module{};
//