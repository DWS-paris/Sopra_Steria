/*
Import
*/
  // Angular
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from "@angular/common/http";

  // Inner
  import { UserModel } from "../../shared/_models/user.model";
//

/*
Definition & export
*/
@Injectable({
    providedIn: 'root'
  })
  export class UserService {

    /*
    Variables
    */
      private apiUrl: string;
      private myHeader: HttpHeaders;
    //

    constructor(
      // Injecter le module HttpClient dans le service
      private HttpClient: HttpClient
    ) { 
      // Ajouter de la valeur aux variables
      this.apiUrl = 'https://tap.dwsapp.io/api';

      this.myHeader = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('tap-connect')}`)
    }

    /*
    Methodes
    */
      // Créer une fonction pour créer un utilisateur
      public registerUser = ( data: UserModel ): Promise<any> => {
        return this.HttpClient.post(`${this.apiUrl}/auth/register`, data)
        .toPromise().then(this.getData).catch(this.handelError);
      }

      // Créer une fonction pour connecter un utilisateur
      public loginUser = ( data: UserModel ): Promise<any> => {
        return this.HttpClient.post(`${this.apiUrl}/auth/login`, data)
        .toPromise().then(this.getData).catch(this.handelError);
      }

      // Créer une fonction pour vértifier le token utilisateur
      public checkUserToken = (): Promise<any> => {
        return this.HttpClient.get(`${this.apiUrl}/user/me`, { headers: this.myHeader } )
        .toPromise().then(this.getData).catch(this.handelError);
      }
    //



    /*
    Fonctions de traitements des réponses de l'API
    */
      private getData = (response) => {
        return Promise.resolve(response || {});
      };

      private handelError = (err) => {
        return Promise.reject(err)
      };
    //
  };
//