/*
Import
*/
  // Angular
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TapModel } from '../../shared/_models/tap.model';
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
      public getScores = (token: string): Promise<any> => {
        // Définition du header de la requête
        const myHeader = new HttpHeaders().set( 'Authorization', `Bearer ${token}` );

        return this.HttpClient.get(`${this.apiUrl}/tap`, { headers: myHeader })
        .toPromise().then(this.getData).catch(this.handelError)
      }

      // Créer une fonction pour enregistrer un score
      public saveScore = ( data: TapModel, token: string ): Promise<any> => {
        // Définition du header de la requête
        const myHeader = new HttpHeaders().set( 'Authorization', `Bearer ${token}` );
        
        // Définition des données à sauvegarder
        const dataToSave: TapModel = {
          score: data.score,
          userName: data.userName,
          humanDate: data.humanDate
        }

        // Requête HTTP
        return this.HttpClient.post(`${this.apiUrl}/tap/register`, dataToSave, { headers: myHeader })
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