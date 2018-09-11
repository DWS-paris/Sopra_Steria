/*
Import
*/
    // Angular
    import { NgModule } from "@angular/core";

    // Inner
    import { HomePageComponent } from "./home-page.component";
    import { Router } from "./route";
    import { RegisterFormModule } from "../../shared/register-form/module";
    import { LoginFormModule } from "../../shared/login-form/module";
//


/*
Définition
*/
    @NgModule({
        // Déclarer le composant
        declarations: [ HomePageComponent ],

        // Injecter le/s module/s
        imports: [ Router, RegisterFormModule, LoginFormModule ]
    })
//


/*
Export
*/
    export class Module{};
//