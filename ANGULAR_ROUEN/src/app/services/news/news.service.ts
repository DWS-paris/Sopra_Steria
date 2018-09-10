/*
Import
*/
  // Angular
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from "@angular/common/http"; // Pour les requêtes HTTP
  import { environment } from "../../../environments/environment";

// 


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  /*
  Variables
  */
    private apiUrl: string;
  //

  constructor(
    // Injecter le module HttpClient dans la class du service
    private HttpClient: HttpClient
  ) { 
    // Ajouter de la valeur aux variables
    this.apiUrl = `https://newsapi.org/v2`
  }

  /*
  Méthodes
  */
    // Crèer une fonction pour récupérer la liste des sources
    public getSources = (): Promise<any> => {
      return this.HttpClient.get(`${this.apiUrl}/sources?apiKey=${environment.newsApiKey}`)
      .toPromise().then(this.getData).catch(this.handleError);
    }

    // Crèer une fonction pour récupérer la liste des articles
    public getArticles = (source: string, langue: string = 'fr'): Promise<any> => {
      return this.HttpClient.get(`${this.apiUrl}/everything?sources=${source}&language=${langue}&apiKey=${environment.newsApiKey}`)
      .toPromise().then(this.getData).catch(this.handleError);
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
