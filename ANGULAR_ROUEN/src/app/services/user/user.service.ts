/*
Import
*/
  // Angular
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from "@angular/common/http"; // Pour les requêtes HTTP

  // Inner
  import { UserModel } from "../../shared/_models/user.model";
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
      // Créer une fonction pour charger la liste des utilisateurs
      public getUsers = (): Promise<any> => {
        return this.HttpClient.get( `${this.apiUrl}` )
          .toPromise().then(this.getData).catch(this.handleError)
      }

      // Créer une fonction pour chager les données d'un utilisateur
      public getSingle = ( _id: number ): Promise<any> => {
        return this.HttpClient.get(
          `${this.apiUrl}?id=${_id}`)
          .toPromise().then(this.getData).catch(this.handleError)
      }

      // Créer une fonction pour modifier les données d'un utilisateur
      public editUser = ( _id: number, data: UserModel ): Promise<any> => {
        return this.HttpClient.patch(`${this.apiUrl}/${_id}`, data)
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