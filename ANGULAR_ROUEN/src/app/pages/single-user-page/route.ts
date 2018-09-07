/*
Import
*/
    // Angular
    import { ModuleWithProviders } from "@angular/core";
    import { Routes, RouterModule } from "@angular/router";

    // Inner
    import { SingleUserPageComponent } from "./single-user-page.component";
//

/*
Définir les routes dans un tableau de Routes
*/
    const routes: Routes = [
        {
            path: '',
            component: SingleUserPageComponent
        }
    ];
//

/*
Exporter les routes
*/
    export const ComponentRouter: ModuleWithProviders = RouterModule.forChild(routes);
//