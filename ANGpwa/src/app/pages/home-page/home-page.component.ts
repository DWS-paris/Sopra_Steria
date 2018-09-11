/*
Import
*/
  // Angular
  import { Component, OnInit } from '@angular/core';

  // Inner
  import { UserModel } from "../../shared/_models/user.model";
  import { UserService } from "../../services/user/user.service";
//

/*
Definition
*/
  @Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html'
  })
//


/*
Export
*/
  export class HomePageComponent implements OnInit {

    /*
    Variables
    */
      public textContent: any;
      public registerFormData: UserModel;
      public loginFormData: UserModel;
    //

    constructor(
      private UserService: UserService
    ) { 
      // Ajouter des valeurs aux variables
      this.textContent = {
        login: {
          title: 'Login',
          email: 'Email',
          password: 'Password'
        },
        register: {
          title: 'Register',
          about: {
            title: 'About',
            firstName: 'Firstname',
            lastName: 'Lastname'
          },
          login: {
            title: 'Login informations',
            email: 'Email',
            password: 'Password'
          },
          cguLabel: 'I accept the terms and conditions',
          submitButton: 'Register',
          errorLabel: '<span>Mandatory</span>'
        }
      };

      this.registerFormData = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        cgu: false
      }

      this.loginFormData = {
        email: '',
        password: ''
      }
    };

    /*
    Méthodes
    */
      // Créer une fonction pour enregistrer un nouvel utilisateur
      public registerUser = ( user: UserModel ) => {
        // Contacter le service pour enregistrer les données
        this.UserService.registerUser(user)
        .then( apiResponse => {
          console.log(apiResponse)
        })
        .catch( apiResponse => {
          console.error(apiResponse)
        })
      };

      // Créer une fonction pour connecter un utilisateur
      public loginUser = ( user: UserModel ) => {
        // Contacter le service pour connecter un utilisateur
        this.UserService.loginUser(user)
        .then( apiResponse => {
          console.log(apiResponse)
          
          // Enregister le token dans le navigateur
          localStorage.setItem('tap-connect', apiResponse.data.token)
        })
        .catch( apiResponse => {
          console.error(apiResponse)
        })
      };
    //

    ngOnInit() {
    }

  }
//