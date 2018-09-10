/*
Import et configuration
*/
  // Angular
  import { Component, OnInit } from '@angular/core';
  import { Router } from "@angular/router";

  // Inner
  import { AuthService } from "../../services/auth/auth.service"; // #1 Importer le/les service/s
  import { RegisterModel } from "../../shared/_models/register.model";
  import { UserModel } from "../../shared/_models/user.model";
  import { LoginModel } from "../../shared/_models/login.model";

  // Configuration
  @Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',

    // #2 Ajouter le/les service/s dans le tableau des providers
    providers: [ AuthService ],

    styles: [`
      form, app-user-form{
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
//

/*
Export
*/
  export class HomePageComponent implements OnInit {

    /*
    Variables
    */
      public pageTitle: string;
      public pageSubTitle: string;
      public registerFormData: RegisterModel;
      public loginFormData: LoginModel;
      private formError: number;
      private newUser: UserModel;
      public formToggle: any;
    //


    /*
    Ajouter des valeurs aux variables
    */
      constructor(
        // Injecter le/les service/s dans le constructor
        private AuthService: AuthService,
        // Injecter le Router
        private Router: Router
      ) {
        // Ajouter des valeurs aux variables
        this.pageTitle = `Formulaire d'inscription`;
        this.pageSubTitle = `Formulaire de connexion`;
        this.formToggle = {
          register: false,
          login: false
        };
      };
    //


    /*
    Méthodes
    */
      // Créer une fonction pour initialiser le formulaire
      private formInit = () => {
        this.registerFormData = {
          userEmail: {
            label: `Votre email`,
            value: ``
          },
          userName: {
            label: `Nom complet`,
            value: ``
          },
          userPassword: {
            label: `Votre mot de passe`,
            value: ``
          },
          userRepeatPassword: {
            label: `Répéter votre mot de passe`,
            value: ``
          },
          userTos: {
            label: `Accépter les CDG`,
            value: false
          }
        };

        this.loginFormData = {
          email: {
            label: 'Votre email',
            value: ''
          },
          password: {
            label: 'Votre mot de passe',
            value: ''
          }
        };
      };

      // Créer une fonction pour l'inscription d'un utilisateur
      public registerUser = ( event: RegisterModel ) => {
        
        console.log('PARENT', event)

          // Ajouter les données dans l'objet newUser
          this.newUser = {
            email: event.userEmail.value,
            password: event.userPassword.value,
            userName: event.userName.value
          };

          // Contacter le service pour ajouter un utilisateur
          this.AuthService.registerUser(this.newUser)
          .then( apiResponse => {
            console.log(apiResponse)

            // Réinitialiser le formulaire
            this.formInit();
          })
          .catch( apiResponse => console.error(apiResponse) );
      };

      // Créer une fonction pour la connexion d'un utilisateur
      public logUser = () => {
        // Initialiser formError
        this.formError = 0;

        // Vérifier la valeur des champs du formulaire
        this.loginFormData.email.value.length < 6 ? this.addError(this.loginFormData.email) : null;
        this.loginFormData.password.value.length < 2 ? this.addError(this.loginFormData.password) : null;

        // Validation finale
        if( this.formError === 0 ){
          console.log('OK login')

          // Contacter l'api
          this.AuthService.logUser(this.loginFormData)
          .then( apiResponse => {
            
            // Rediriger l'utilisateur connecté
            apiResponse.length === 1 ? this.Router.navigateByUrl('/news') : false

            // Vider le formulaire
            this.formInit();
          })
          .catch( apiResponse => {
            console.error(apiResponse)
          })
        }
      }

      // Créer une fonction pour ajouter une erreur au registerFormData
      private addError = ( object ) => {
        // Ajouter 1 à formError
        this.formError++;

        // Afficher un message d'erreur
        object.label += `<span>Champ obligatoire</span>`
      };

      // Créer une fonction pour supprimer un message d'erreur
      public deleteError = (object, text: string) => {
        object.label = text
      }
    //


    /*
    Hooks Angular
    */
      ngOnInit() {
        this.formInit();
      }
    //

  }
//