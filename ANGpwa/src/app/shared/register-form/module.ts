/*
Import
*/
    // Angular
    import { NgModule } from "@angular/core";
    import { FormsModule } from "@angular/forms";
    import { CommonModule } from "@angular/common";

    // Inner
    import { RegisterFormComponent } from "./register-form.component";
//

/*
Definition
*/
    @NgModule({
        // Déclarer le composant
        declarations: [ RegisterFormComponent ],

        // Importer les modules
        imports: [ FormsModule, CommonModule ],

        // Exporter le composant
        exports: [ RegisterFormComponent ]
    })
//

/*
Export
*/
    export class RegisterFormModule{};
//