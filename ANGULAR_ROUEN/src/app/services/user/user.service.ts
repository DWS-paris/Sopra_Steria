/*
Import
*/
  // Angular
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from "@angular/common/http"; // Pour les requêtes HTTP
// 



/*
Configuration et export
*/
  @Injectable({
    providedIn: 'root'
  })

  export class UserService {

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
      public getUsers = (): Promise<any> => {
        return this.HttpClient.get( `${this.apiUrl}` )
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