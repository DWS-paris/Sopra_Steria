/*
Import
*/
    // Angular
    import { NgModule } from "@angular/core";
    import { CommonModule } from "@angular/common"; //=> pour *ngIf, *ngFor, ...

    // Inner
    import { HomePageComponent } from "./home-page.component";
    import { Router } from "./route";
    import { RegisterFormModule } from "../../shared/register-form/module";
    import { LoginFormModule } from "../../shared/login-form/module";
    import { HeaderModule } from "../../shared/header/module";
    import { PopinModule } from "../../shared/popin/module";
//


/*
Définition
*/
    @NgModule({
        // Déclarer le composant
        declarations: [ HomePageComponent ],

        // Injecter le/s module/s
        imports: [ 
            CommonModule, 
            Router, 
            RegisterFormModule, 
            LoginFormModule, 
            HeaderModule,
            PopinModule
        ]
    })
//


/*
Export
*/
    export class Module{};
//