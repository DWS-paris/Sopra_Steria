/*
Import
*/
    // Angular
    import { NgModule } from "@angular/core";

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
        imports: [ Router ]
    })
//


/*
Export
*/
    export class Module{};
//