/*
Import
*/
    // Angular
    import { NgModule } from "@angular/core";
    import { CommonModule } from "@angular/common";

    // Outter
    import { AngularFontAwesomeModule } from 'angular-font-awesome';

    // Inner
    import { PopinComponent } from "./popin.component";
//

/*
Definition
*/
    @NgModule({
        // Déclarer le composant
        declarations: [ PopinComponent ],

        // Importer les modules
        imports: [ CommonModule, AngularFontAwesomeModule ],

        // Exporter le composant
        exports: [ PopinComponent ]
    })
//

/*
Export
*/
    export class PopinModule{};
//