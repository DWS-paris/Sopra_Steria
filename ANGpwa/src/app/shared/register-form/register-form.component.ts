/*
Import
*/
  // Angular
  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

  // Inner
  import { UserModel } from "../../shared/_models/user.model";
//


/*
Definition
*/
  @Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styles: [`
      label, input{ transition: all .3s }
      .error label{ color: red }
      .error input{ border-color: red }
    `]
  })
//


/*
Export
*/
  export class RegisterFormComponent implements OnInit {

    /*
    Variables
    */ 
      // Importer des données depuis le composant parent
      @Input() textContent: any;
      @Input() registerFormData: UserModel;

      // Créer un événement
      @Output() sendData = new EventEmitter();

      public formError: number;
      public errors: any;
    //

    constructor() {
      // Ajouter des valeurs aux variables
      this.errors = {
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        cgu: false
      }
     }

    /*
    Méthodes
    */
      // Créer une fonction pour la soumission du formulaire
      public submitForm = () => {
        // Initialiser la valeur de formError
        this.formError = 0;

        // Vérifier les données du formulaire
        if(this.registerFormData.firstName.length < 1){
          this.formError++;
          this.errors.firstName = true
        }

        if(this.registerFormData.lastName.length < 1){
          this.formError++;
          this.errors.lastName = true
        }

        if(this.registerFormData.email.length < 1){
          this.formError++;
          this.errors.email = true
        }

        if(this.registerFormData.password.length < 1){
          this.formError++;
          this.errors.password = true
        }

        if(this.registerFormData.cgu === false){
          this.formError++;
          this.errors.cgu = true
        }

        // Vérification finale
        this.formError === 0 ? this.sendData.emit(this.registerFormData) : null;
      }
    //

    ngOnInit() {
    }

  }
//