/*
Import
*/
    // Angular
    import { ModuleWithProviders } from "@angular/core";
    import { Routes, RouterModule } from "@angular/router";

    // Inner
    import { UserListComponent } from "./user-list.component";
//

/*
Définir les routes dans un tableau de Routes
*/
    const routes: Routes = [
        {
            path: '',
            component: UserListComponent
        }
    ];
//

/*
Exporter les routes
*/
    export const ComponentRouter: ModuleWithProviders = RouterModule.forChild(routes);
//