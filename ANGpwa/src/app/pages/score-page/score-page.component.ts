/*
Imports
*/
  // Angular
  import { Component, OnInit } from '@angular/core';
  import { Router } from "@angular/router";

  // Inner
  import { GameService } from "../../services/game/game.service";
  import { TapModel } from "../../shared/_models/tap.model";
//

/*
Definition & export
*/
  @Component({
    selector: 'app-score-page',
    templateUrl: './score-page.component.html'
  })
  export class ScorePageComponent implements OnInit {

    /*
    Variables
    */
      public scoreCollection: Array<TapModel>;
      public textContent: any;
      private userToken: string;
    //

    constructor(
      // Injecter le service dans la class du composant
      private GameService: GameService,
      private Router: Router
    ) { 
      this.textContent = {
        header: {
          title: 'Score <em>page</em>',
          subTitle: 'Here is the list of scores',
          path: '/score',
          nav: {
            content: 'Play',
            path: '/game'
          }
        }
      }

      this.userToken = localStorage.getItem('tap-connect');
    }

    /*
    Methodes
    */
      // Créer une fonction pour charger le liste des scores
      private getScore = () => {
        this.GameService.getScores(this.userToken)
        .then( apiResponse =>  {
          this.scoreCollection = apiResponse.data.sort( (a: TapModel, b: TapModel) => {
            // Classer les résultats
            if( a.score < b.score ) return 1;
            else if( a.score > b.score ) return -1;
            else return 0;
          })
        })
        .catch( apiResponse => {
          console.error(apiResponse)
        })
      }
    //

    ngOnInit() {
      // Charger la liste des scores une fois le composant chargé
      this.getScore();
    }

  }
//