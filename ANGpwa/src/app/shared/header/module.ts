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
Definition
*/
    @NgModule({
        // Déclarer le composant
        declarations: [ HeaderComponent ],

        // Importer les modules
        imports: [ CommonModule, RouterModule ],

        // Exporter le composant
        exports: [ HeaderComponent ]
    })
//

/*
Export
*/
    export class HeaderModule{};
//