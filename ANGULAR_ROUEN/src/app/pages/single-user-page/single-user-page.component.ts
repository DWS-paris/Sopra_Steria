/*
Import
*/
  // Angular
  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from "@angular/router";

  // Inner
  import { UserService } from "../../services/user/user.service";
  import { UserModel } from "../../shared/_models/user.model";
// 

/*
Configuration et export
*/
  @Component({
    selector: 'app-single-user-page',
    templateUrl: './single-user-page.component.html',
    styles: []
  })

  export class SingleUserPageComponent implements OnInit {

    /*
    Variables
    */
      public singleUser: UserModel;
      public pageTitle: string;
      public editButton: string;
    //

    constructor(
      // Injecter ActivatedRoute dans la class
      private ActivatedRoute: ActivatedRoute,

      // Injecter le service dans la class
      private UserService: UserService
    ) {
      // Ajouter des valeurs aux variables
      this.pageTitle = `Informations utilisateur`;
      this.editButton = `Modifier les informations`;
    };


    /*
    Méthoes
    */
      // Créer une fonction pour récupérer le paramêtre de la route
      private getRouteParam = () => {
        console.log(this.ActivatedRoute.params);

        // Boucler sur le tableau de paramêtres
        this.ActivatedRoute.params.forEach( params => {
          // Vérifier la présence du paramêtre id
          params['id'] ? this.getUserInfo(params['id']) : null;
        })
      };

      // Créer une fonction pour charger les données d'un utiliateur
      private getUserInfo = ( _id: string ) => {
        this.UserService.getSingle( parseInt(_id) )
        .then( apiResponse => this.singleUser = apiResponse[0] )
        .catch( apiResponse => {
          console.error(apiResponse)
        });
      };
    //


    /*
    Hooks Angular
    */
      ngOnInit() {
        // Récupérer le paramêtre de la route
        this.getRouteParam();
      }
    //

  }
//