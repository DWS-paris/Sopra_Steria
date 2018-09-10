
/*
Imports
*/
  // Angular
  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

  // Inner
  import { RegisterModel } from "../../shared/_models/register.model";
//


/*
Définition et export
*/
  @Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styles: []
  })
  export class UserFormComponent implements OnInit {

    /*
    Variables
    */
      // Importer des données depuis le composant parent
      @Input() formData: RegisterModel;
      @Input() formType: string;

      // Créer un événement
      @Output() sendData = new EventEmitter();

      public formError: number;
    //

    constructor() { }

    /*
    Méthode
    */
      // Créer une fonction pour la soumission du formulaire
      public registerUser = () => {
         // Initialiser la variable formError
         this.formError = 0;
        
         // Vérifier les données de l'objet formData
         this.formData.userName.value.length < 2 ? this.addError(this.formData.userName) : null;
         this.formData.userEmail.value.length < 6 ? this.addError(this.formData.userEmail) : null;
         this.formData.userPassword.value.length < 5 ? this.addError(this.formData.userPassword) : null;

         if( this.formType === 'create' ){
          this.formData.userRepeatPassword.value !== this.formData.userPassword.value ? this.addError(this.formData.userRepeatPassword) : null;
          this.formData.userTos.value === false ? this.addError(this.formData.userTos) : null;
        }

        //  Vérification finale :  émettre l'événement sendData
        this.formError === 0 ? this.sendData.emit(this.formData) : null;
      };
      
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

    ngOnInit() {
    }

  }
//