/*
Imports
*/
  // Angular
  import { Component, OnInit } from '@angular/core';
  import { Router } from "@angular/router";

  // Inner
  import { UserService } from "../../services/user/user.service";
  import { UserModel } from "../../shared/_models/user.model";
//

/*
Configuration et export
*/
  @Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    providers: [ UserService ],
    styles: [`
      i{ padding: .5rem; }
      li{ border-bottom: .1rem solid #333; padding-bottom: 1rem; margin-bottom: 1rem; }
    `]
  })
  export class UserListComponent implements OnInit {

    /*
    Variables
    */
      public pageTitle: string;
      public userCollection: Array<UserModel>;
    //

    constructor(
      // Injecter le service et le router dans la class
      private UserService: UserService,
      private Router: Router
    ) {
      // Ajouter des valeurs aux variables
      this.pageTitle = `Liste des utilisateurs`;
     };

    /*
    Méthodes
    */
      // Créer une fonction pour charger la liste des utilisateurs
      private getUsers = () => {
        this.UserService.getUsers()
        .then( apiResponse => {
          console.log(apiResponse)

          // Ajouter les données de l'API dans  userCollection
          this.userCollection = apiResponse;
        })
        .catch( apiResponse => console.error(apiResponse))
      }

      // Créer une fonction pour changer de route
      public changeRoute = ( id: number ) => {
        this.Router.navigateByUrl(`/single-user/${id}`);
      }
    //

    /*
    Hooks Angular
    */
      ngOnInit() { // Une fois le composant chargé
        this.getUsers();
      }
    //
  }
//