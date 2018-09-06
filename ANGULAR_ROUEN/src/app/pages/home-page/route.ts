/*
Import
*/
    // Angular
    import { ModuleWithProviders } from "@angular/core";
    import { Routes, RouterModule } from "@angular/router";

    // Inner
    import { HomePageComponent } from "./home-page.component";
//

/*
Définir les routes dans un tableau de Routes
*/
    const routes: Routes = [
        {
            path: '',
            component: HomePageComponent
        }
    ];
//

/*
Exporter les routes
*/
    export const ComponentRouter: ModuleWithProviders = RouterModule.forChild(routes);
//