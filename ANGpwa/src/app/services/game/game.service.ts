/*
Import
*/
  // Angular
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from "@angular/common/http";
//


/*
Definition & export
*/
  @Injectable({
    providedIn: 'root'
  })
  export class GameService {

    /*
    Variables
    */
      private apiUrl: string;
      private myHeader: HttpHeaders;
    //

    constructor(
      // Injecter le module HttpClient
      private HttpClient: HttpClient
    ) { 
      // Donner des valeurs aux variables
      this.apiUrl = 'https://tap.dwsapp.io/api'

      // Définir le header de la requête
      this.myHeader = new HttpHeaders().set( 'Authorization', `Bearer ${localStorage.getItem('tap-connect')}` );
    }

    /*
    Methodes
    */
      // Créer une fonction pour récupérer la liste de score
      public getScores = (): Promise<any> => {
        return this.HttpClient.get(`${this.apiUrl}/tap`, { headers: this.myHeader })
        .toPromise().then(this.getData).catch(this.handelError)
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
  }
//