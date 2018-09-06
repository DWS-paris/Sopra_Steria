/*
Import et configuration
*/
  // Angular
  import { Component, OnInit } from '@angular/core';

  // Inner
  import { RegisterModel } from "../../shared/_models/register.model";

  // Configuration
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
      public pageTitle: string;
      public formData: RegisterModel;
      private formError: number;
    //


    /*
    Ajouter des valeurs aux variables
    */
    constructor() {
      this.pageTitle = `Formulaire d'inscription`;
      
      
    };
    //


    /*
    Méthodes
    */
      // Créer une fonction pour initialiser le formulaire
      private formInit = () => {
        this.formData = {
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
        }
      }

      // Créer une fonction pour l'inscription d'un utilisateur
      public registerUser = () => {
        // Initialiser la variable formError
        this.formError = 0;
        
        // Vérifier les données de l'objet formData
        this.formData.userName.value.length < 2 ? this.addError(this.formData.userName) : null;
        this.formData.userEmail.value.length < 5 ? this.addError(this.formData.userEmail) : null;
        this.formData.userPassword.value.length < 5 ? this.addError(this.formData.userPassword) : null;
        this.formData.userRepeatPassword.value !== this.formData.userPassword.value ? this.addError(this.formData.userRepeatPassword) : null;
        this.formData.userTos.value === false ? this.addError(this.formData.userTos) : null;

        // Validation finale
        if( this.formError === 0 ){
          console.log('OK formulaire');

          // Inscrire le user depuis une API

          // Réinitialiser le formulaire
          this.formInit();
        }
      };

      // Créer une fonction pour ajouter une erreur au formData
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