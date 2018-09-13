/*
Imports
*/
  // Angular
  import { Component, OnInit } from '@angular/core';
  import { Router } from "@angular/router";

  // Inner
  import { GameService } from "../../services/game/game.service";
  import { UserService } from "../../services/user/user.service";
  import { TapModel } from "../../shared/_models/tap.model";
  import { UserModel } from "../../shared/_models/user.model";
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
      public textContent: any;
      private scoreData: TapModel;
      private userToken: string;
      private userData: UserModel;
    //

    constructor(
      private Router: Router,
      private GameService: GameService,
      private UserService: UserService
    ) {
      // Ajouter des valeurs aux variables
      this.tapIsOn = false;
      this.timeAmount = 0;
      this.clickAmount = 0;

      this.textContent = {
        header: {
          title: 'Welcome ',
          subTitle: 'You have 10 secondes to tap. Ready, steady, tap!',
          path: '/game',
          nav: {
            content: 'Score',
            path: '/score'
          }
        }
      }

      this.userToken = localStorage.getItem('tap-connect');
    }

    /*
    Methodes
    */
      // Créer une fonction pour récupérer les info utilisateur
      private getUserInfo = () => {
        this.UserService.checkUserToken(this.userToken)
        .then( apiResponse => this.userData = apiResponse.data)
        .catch( apiReponse => console.error(apiReponse) );
      };

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
          this.timeAmount < 100 ? this.startTimer() : this.saveUserScore(this.clickAmount);
        }, 100 )
      }

      // Créer une fonction pour qauvegarder le score
      private saveUserScore = ( score: number ) => {
        // Décoder le token

        // Définir les données à sauvegarder
        this.scoreData = {
          score: score,
          humanDate: new Date().toLocaleString('fr-FR'),
          userName: `${this.userData.firstName} ${this.userData.lastName}`
        }

        // Constacter le service pour sauvegarder le score
        this.GameService.saveScore( this.scoreData, this.userToken )
        .then( () => this.Router.navigateByUrl('/score') )
        .catch( apiResponse =>{
          console.error(apiResponse)
        });
      };
    //

    ngOnInit() {
      this.getUserInfo();

      console.log( new Date().toLocaleString('fr-FR') )
    }
  }
//