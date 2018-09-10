/*
Import
*/
  // Angular
  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from "@angular/router"; // Pour récupérer le paramêtre d'une route

  // Inner
  import { UserService } from "../../services/user/user.service";
  import { UserModel } from "../../shared/_models/user.model";
  import { RegisterModel } from "../../shared/_models/register.model";
// 

/*
Configuration et export
*/
  @Component({
    selector: 'app-single-user-page',
    templateUrl: './single-user-page.component.html',
    styles: [`
      app-user-form, ul{
        height: 0;
        overflow: hidden;
        transition: height .3s;
      }

      .isOpen{
        height: 35rem;
        overflow: auto;
      }
    `]
  })

  export class SingleUserPageComponent implements OnInit {

    /*
    Variables
    */
      public pageTitle: string;
      public singleUser: UserModel;
      public singleUserData: RegisterModel;
      private formError: number;
      public textButton: any;
      public toggleBoxe: boolean;
    //

    constructor(
      // Injecter ActivatedRoute dans la class
      private ActivatedRoute: ActivatedRoute,

      // Injecter le service dans la class
      private UserService: UserService
    ) {
      // Ajouter des valeurs aux variables
      this.pageTitle = `Informations utilisateur`;
      this.textButton = {
        edit: `Modifier les informations`,
        save: `Enregistrer les informations`,
        cancel: `Annuler les informations`
      };
      this.toggleBoxe = false;
    };


    /*
    Méthodes
    */
      // Créer une fonction pour récupérer le paramêtre de la route
      private getRouteParam = () => {
        // Boucler sur le tableau de paramêtres
        this.ActivatedRoute.params.forEach( params => {
          // Vérifier la présence du paramêtre id
          params['id'] ? this.getUserInfo(params['id']) : null;
        })
      };

      // Créer une fonction pour charger les données d'un utiliateur
      private getUserInfo = ( _id: string ) => {
        this.UserService.getSingle( parseInt(_id) )
        .then( apiResponse => {
          this.singleUser = apiResponse[0];
          this.singleUserData = {
            userEmail:{
              label: 'Modifier le email',
              value: this.singleUser.email
            },
            userName: {
              label: 'Modifier le nom',
              value: this.singleUser.userName
            },
            userPassword: {
              label: 'Modifier le mot de passe',
              value: this.singleUser.password
            }
          }
        })
        .catch( apiResponse => {
          console.error(apiResponse)
        });
      };

      // Créer une fonction pour la validation du formulaire
      public submitForm = ( event: RegisterModel ) => {
        // Modifier l'objet singleUser
        const data: UserModel = {
          email: event.userEmail.value,
          userName: event.userName.value,
          password: event.userPassword.value
        };

        // Contacter le service pour modifier les données utilisateur
        this.UserService.editUser( this.singleUser.id, data )
        .then( apiResponse => {
          // Mettre à jour les données utilisateur
          this.singleUser.email = apiResponse.email;
          this.singleUser.userName = apiResponse.userName;
          this.singleUser.password = apiResponse.password;

          // Masquer le formulaire
          this.toggleBoxe = false;
        })
        .catch( apiResponse => console.error(apiResponse));
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