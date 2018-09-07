/*
Import
*/
    import { ModuleWithProviders } from "@angular/core";
    import { Routes, RouterModule } from "@angular/router";
//

/*
Définir les routes dans un tableau de Routes
*/
    const mainRoutes: Routes = [
        {
            path: '',
            loadChildren: './pages/home-page/module#Module' // Lazy Load
        },

        {
            path: 'news',
            loadChildren: './pages/news-page/module#Module' // Lazy Load
        },

        {
            path: 'users',
            loadChildren: './pages/user-list/module#Module' // Lazy Load
        },
        {
            // Définir une route avec paramêtre
            path:'single-user/:id',
            loadChildren: './pages/single-user-page/module#Module' // Lazy Load
        }
    ];
//

/*
Exporter les routes
*/
    export const AppRouterModule: ModuleWithProviders = RouterModule.forRoot(mainRoutes);
//