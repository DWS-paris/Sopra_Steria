/*
Import
*/
  // Angular
  import { Component, OnInit, Input } from '@angular/core';
  import { Router } from "@angular/router";

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
      @Input() title: string;
      @Input() subTitle: string;
      @Input() path: string;
      @Input() nav: any = undefined;
      private userToken: string;
      public logoutButton: string;
    //
    
    constructor(
      private Router: Router,
      private UserService: UserService
    ){
      this.userToken = localStorage.getItem('tap-connect');
      this.logoutButton = 'Logout';
    }

    /*
    Methodes
    */
      // Créer une fonction pour changer de vue
      public navigateTo = (path: string) => this.Router.navigateByUrl(path);

      // Créer une fonction pour déconnecter l'utilisateur
      public logOutUser = () => {
        // Supprimer le faux token
        localStorage.removeItem('tap-connect')
        this.userToken = undefined;
        this.Router.navigateByUrl('/')
      }

      // Créer une fonction pour récupérer le token utilisateur
      private getUserToken = () => {
        this.userToken ? this.getUserData() : this.Router.navigateByUrl('/');
      }

      // Créer une fonction pour vérifier l'identité de l'utilisateur
      private getUserData = () => {
        this.UserService.checkUserToken(this.userToken)
        .then( apiResponse => {
          this.path === '/game' ? this.title += `<em>${apiResponse.data.firstName}</em>` : null;
        })
        .catch( () => this.logOutUser() )
      };
    //

    ngOnInit() {
      this.getUserToken();
    }

  }
//