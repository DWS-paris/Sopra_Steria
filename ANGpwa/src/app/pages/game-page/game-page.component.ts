/*
Imports
*/
// Angular
import { Component, OnInit } from '@angular/core';
//

/*
Definition & export
*/
  @Component({
    selector: 'app-game-page',
    templateUrl: './game-page.component.html',
    styles: [`
      article {
        position: relative;
        width: 30rem;
        height: 30rem;
        margin: auto;
      }

      img{
        position: absolute;
      }
    `]
  })
  export class GamePageComponent implements OnInit {

    /*
    Variables
    */
      public tapIsOn: boolean;
      public timeAmount: number;
      private clickAmount: number;
    //

    constructor() {
      // Ajouter des valeurs aux variables
      this.tapIsOn = false;
      this.timeAmount = 0;
      this.clickAmount = 0;
    }

    /*
    Methodes
    */
      // Créer une fonction pour inverser la valeur de tapIsOn
      public tapping = () => {
        // Lancer la timer au premier click
        this.clickAmount === 0 ? this.startTimer() : null;

        // Incrémenter la vameur de clickAmount
        this.clickAmount++;
        // Inverser la valeur de tapIsOn
        this.tapIsOn = !this.tapIsOn;
      };

      // Créer une fonction pour gérer la durée du jeu
      private startTimer = () => {
        // Lancer un tiemer toute les 1/10eme de sec.
        setTimeout( () => {
          // Incrémenter la valeur de timeAmount
          this.timeAmount++;
          // Relancer le timer tant que timeAmount est différent de 100
          this.timeAmount < 100 ? this.startTimer() : console.log(this.clickAmount);
        }, 100 )
      }
    //

    ngOnInit() {}
  }
//