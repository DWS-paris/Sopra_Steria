/*
Imports
*/
  // Angular
  import { Component, OnInit } from '@angular/core';

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
    //

    constructor(
      // Injecter le service dans la class du composant
      private GameService: GameService
    ) { }

    /*
    Methodes
    */
      // Créer une fonction pour charger le liste des scores
      private getScore = () => {
        this.GameService.getScores()
        .then( apiResponse =>  this.scoreCollection = apiResponse.data )
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