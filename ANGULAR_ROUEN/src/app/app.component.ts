/*
Importer les interfaces
*/
  import { Component } from '@angular/core';
//


/*
Configurer et exporter le composant
*/
  @Component({
    selector: 'app-root',
    template: `
      <router-outlet></router-outlet>
    `,
    styles: [`
      .redColor{ 
        color: red;
      }

      p{
        transition: color .3s;
      }
    `]
  })
  export class AppComponent {
    /*
    Variables
    */
      public title: string;
      public collection: Array<string>;
      public isOpen: boolean;
      public addClass: boolean;
      public userName: string;
    // 

    /*
    Ajouter de valeurs aux variables
    */
      constructor(){
        this.title = `Hello Angular`;
        this.collection = [
          `John`, `Paul`, `Georges`, `Ringo`
        ];
        this.isOpen = false;
        this.addClass = false;
        this.userName = `Robert Nesta`;
      };
    //


    /*
    Méthodes
    */
      public toggleBoxe = () => this.isOpen = !this.isOpen
    //
  };
//