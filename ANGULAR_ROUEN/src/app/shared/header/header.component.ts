/*
Import et configuration
*/
  // Angular
  import { Component, OnInit } from '@angular/core';
  import { Router } from "@angular/router";

  // Inner
  import { NavModel } from "../../shared/_models/nav.model";


  // Configuration
  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: [`
      .isActive{ background: var(--main-color); }
    `]
  })
//

/*
Export
*/
  export class HeaderComponent implements OnInit {

    /*
    Variables
    */
      public mainTitle: string;
      public navCollection: Array<NavModel>;
    //


    /*
    Ajouter de la valeur aux variables
    */
      constructor(
        // Rendre disponible le routeur dans le composant
        private Router: Router
        
      ) {
        this.mainTitle = `NewsFeed`;

        this.navCollection = [
          {
            isActive: false,
            name: 'Accueil',
            path: '/'
          },
          {
            isActive: false,
            name: 'Actualités',
            path: '/news'
          }
        ]
      };
    //


    /*
    Méthodes
    */
      // Créer une fonction pour activer le lien (CSS)
      private linkIsActive = ( path: string ) => {
        for( let item of this.navCollection ){
          item.path === path ? item.isActive = true : null;
        }
      };
    //

    ngOnInit() {
      this.linkIsActive(this.Router.url)
    }

  }
//