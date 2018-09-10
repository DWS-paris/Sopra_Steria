/*
Importes
*/
  // Angular
  import { Component, OnInit } from '@angular/core';

  // Inner
  import { NewsService } from "../../services/news/news.service";
  import { NewsSourceModel } from "../../shared/_models/news.source.model";
  import { ArticleModel } from "../../shared/_models/article.model";
//


/*
Configuration en export
*/
  @Component({
    selector: 'app-news-page',
    templateUrl: './news-page.component.html'
  })
  export class NewsPageComponent implements OnInit {

    /*
    Variables
    */
      public sourcesCollection: Array<NewsSourceModel>;
      public articlesCollection: Array<ArticleModel>;
      public defaultSource: string;
      public blankArticle: ArticleModel;
    //

    constructor(
      // Injecter le services dans la class du composant
      private NewsService: NewsService
    ) {
      this.defaultSource = 'liberation';
      this.blankArticle = {
        title: 'Aucun article',
        description: 'Sélectionner une autre source',
        urlToImage: '/assets/img/jurassic-error.jpg'
      }
    }

    /*
    Méthodes
    */
      // Créer une fonction pour chager le liste des sources
      private getSources = () => {
        this.NewsService.getSources()
        .then( apiResponse => {
          console.log(apiResponse)
          this.sourcesCollection = apiResponse.sources;
        })
        .catch( apiResponse => {
          console.error(apiResponse)
        })
      };

      // Créer une fonction pour charger la liste des articles
      public getArticles = ( source: string = this.defaultSource ) => {
        console.log(source)

        this.NewsService.getArticles(source)
        .then( apiResponse => {
          // Vérifier la présence d'articles dans la réponse de l'api
          apiResponse.totalResults > 0 
          ? this.articlesCollection = apiResponse.articles 
          : this.articlesCollection = [ this.blankArticle ];
        })
        .catch( apiResponse => {
          console.error(apiResponse)
        })
      };
    //

    /*
    Hooks Angular
    */
      async ngOnInit() {
        await this.getSources();
        await this.getArticles();
      };
    //
  };
//