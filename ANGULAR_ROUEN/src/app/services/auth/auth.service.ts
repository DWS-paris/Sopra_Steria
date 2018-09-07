/*
Import
*/
  // Angular
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from "@angular/common/http"; // Pour les requêtes HTTP
  
  // import 'rxjs/add/operator/toPromise' TODO: vérifier toPromise

  // Inner
  import { UserModel } from "../../shared/_models/user.model";
  import { LoginModel } from "../../shared/_models/login.model";
// 



/*
Configuration et export
*/
  @Injectable({
    providedIn: 'root'
  })

  export class AuthService {

    /*
    Variables
    */
      private apiUrl: string;
    //

    constructor(
      // Injecter HttpClient dans la class
      private HttpClient: HttpClient
    ) { 
      // Ajouter des valeurs aux variables
      this.apiUrl = `http://localhost:3000/user`;
    };


    /*
    Méthodes
    */
      public registerUser = ( data: UserModel ): Promise<any> => {
        // Configurer le header de la requête
        let myHeader = new HttpHeaders;
        myHeader.append('Content-Type', 'application/json');

        // Requête qui retourne un Promise (asynchrone)
        return this.HttpClient.post(`${this.apiUrl}`, data, { headers: myHeader })
        .toPromise().then(this.getData).catch(this.handleError)
      };

      public logUser = ( data: LoginModel ): Promise<any> => {
        // Configurer le header de la requête
        let myHeader = new HttpHeaders;
        myHeader.append('Content-Type', 'application/json');

        return this.HttpClient.get(
          `${this.apiUrl}?email=${data.email.value}&password=${data.password.value}`,
          { headers: myHeader })
          .toPromise().then(this.getData).catch(this.handleError)
      }
    //


    /*
    Traitement des retours API
    */
      private getData = (apiResponse) => {
        return Promise.resolve( apiResponse || {} );
      };

      private handleError = (error) => {
        return Promise.reject(error);
      };
    //
  }
//