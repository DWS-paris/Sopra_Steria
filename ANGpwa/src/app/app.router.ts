/*
Import
*/
    // Angular
    import { ModuleWithProviders } from "@angular/core";
    import { Routes, RouterModule } from "@angular/router";
//


/*
Définition de la route
Les routes sont des objets comprenant 2 propriétés : path et loadChildren
*/
    const mainRoutes: Routes = [
        {
            path: '',
            loadChildren: './pages/home-page/module#Module'
        },
        {
            path: 'game',
            loadChildren: './pages/game-page/module#Module'
        },
        {
            path: 'score',
            loadChildren: './pages/score-page/module#Module'
        }
    ];
//


/*
Export du module de route lazy => .forRoot()
*/
    export const MainRouter: ModuleWithProviders = RouterModule.forRoot(mainRoutes);
//