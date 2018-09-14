/*
Import
*/
  // Angular
  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

  // Inner
  import { UserModel } from "../../shared/_models/user.model";
//


/*
Definition & export
*/
  @Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',

    styles: [`
      label, input{ transition: all .3s }
      .error label{ color: red }
      .error input{ border-color: red }
    `]
  })
  export class LoginFormComponent implements OnInit {

    /*
    Variables
    */ 
      // Importer des données depuis le composant parent
      @Input() textContent: any;
      @Input() loginFormData: UserModel;

      // Créer un événement
      @Output() sendData = new EventEmitter();

      public formError: number;
      public errors: any;
    //

    constructor() {
      // Ajouter des valeurs aux variables
      this.errors = {
        email: false,
        password: false,
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
        if(this.loginFormData.email.length < 1){
          this.formError++;
          this.errors.email = true
        }

        if(this.loginFormData.password.length < 1){
          this.formError++;
          this.errors.password = true
        }
        
        // Vérification finale
        this.formError === 0 ? this.sendData.emit(this.loginFormData) : null;
      }
    //

    ngOnInit() {
    }

  }
//