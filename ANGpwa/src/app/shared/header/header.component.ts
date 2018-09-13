/*
Import
*/
  // Angular
  import { Component, OnInit } from '@angular/core';
  import { Router, NavigationEnd } from "@angular/router";

  // Inner
  import { UserService } from "../../services/user/user.service";
//

/*
Definition & export
*/
  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
  })
  export class HeaderComponent implements OnInit {

    /*
    Variables
    */
      public vueContent: any;
      public activPath: string;
    //

    constructor(
      // Injecter le service dans la class du composant
      private UserService: UserService,
      // Injecter le Router dans la class du composant
      private Router: Router
    ){
      // Donner des valeurs aux variables
      this.activPath = 'home';
    }

    /*
    Methodes
    */
      // Créer une fonction pour changer de vue
      public changeVue = ( path: string ) => {
        path === 'game' ? this.Router.navigateByUrl('/score') : this.Router.navigateByUrl('/game');
      }

      // Créer une fonction pour connaitre la path actif
      private getActivPath = () => {
        this.Router.events.forEach( event => {
          
          if( event instanceof NavigationEnd ){
            this.displayContent(event.url)
          }

        });
      }

      // Créer une fonction pour afficher le bon contenu dans la vue
      private displayContent = ( path: string ) => {
        // Switch sur le path pour définir le bon contenu
        switch(path){
          case '/game':
            this.vueContent = {
              title: 'Hello + name',
              subTitle: 'You have 10 seconds to tap. Ready? Steady? Tap!',
              button: 'Score',
              logout: 'Logout'
            };

            this.activPath = 'game';
          break;

          case '/score':
            this.vueContent = {
              title: 'Score table',
              subTitle: 'Here is the list of scores',
              button: 'Play',
              logout: 'Logout'
            };

            this.activPath = 'score';
          break;

          default:
            this.vueContent = {
              title: 'Welcome on TapBoard',
              subTitle: 'Login or register to start tapping'
            };

            this.activPath = 'home';
          break;
        }
      }
      
    //

    ngOnInit() {
      // Capter le path actif
      this.getActivPath();
    }

  }
//