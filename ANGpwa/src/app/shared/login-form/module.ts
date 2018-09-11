/*
Import
*/
    // Angular
    import { NgModule } from "@angular/core";
    import { FormsModule } from "@angular/forms";
    import { CommonModule } from "@angular/common";

    // Inner
    import { LoginFormComponent } from "./login-form.component";
//

/*
Definition
*/
    @NgModule({
        // Déclarer le composant
        declarations: [ LoginFormComponent ],

        // Importer les modules
        imports: [ FormsModule, CommonModule ],

        // Exporter le composant
        exports: [ LoginFormComponent ]
    })
//

/*
Export
*/
    export class LoginFormModule{};
//