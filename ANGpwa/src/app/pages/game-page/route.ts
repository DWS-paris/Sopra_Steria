/*
Import
*/
    // Angular
    import { ModuleWithProviders } from "@angular/core";
    import { Routes, RouterModule } from "@angular/router";

    // Inner
    import { GamePageComponent } from "./game-page.component";
//


/*
Définition de la route
Les routes sont des objets comprenant 2 propriétés : path et component
*/
    const routes: Routes = [
        {
            path: '',
            component: GamePageComponent
        }
    ];
//


/*
Export du module de route enfant => .forChild()
*/
    export const Router: ModuleWithProviders = RouterModule.forChild(routes);
//