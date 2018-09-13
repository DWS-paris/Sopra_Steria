import { Component, OnInit, OnChanges, SimpleChanges,  Input } from '@angular/core';

@Component({
  selector: 'app-popin',
  templateUrl: './popin.component.html',
  styles: [`
    section{ 
      position: fixed; 
      top: -100vh; 
      left: 0; 
      width: 100%; 
      height: 100%; 
      background: rgba(0, 0, 0, .5); 
      opacity: 0;
      transition: opacity .5s;
    }

    section.open{
      top: 0;
    }

    section.open.animated{
      opacity: 1;
    }

    article {
      position: absolute;
      max-width: 50rem;
      background: white;
      padding: 2rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -70%);
      border-radius: .5rem;
      box-shadow: 0 0 2rem rgba(0, 0, 0, .5);
    }

    p {
      margin-bottom: 0;
    }

    fa {
      position: absolute;
      top: -3.5rem;
      right: 0;
      background: black;
      padding: .5rem 1rem;
      color: white;
    }
  `]
})
export class PopinComponent implements OnInit, OnChanges {

  /*
  Variables
  */
    @Input() popinContent: any;
    public isOpen: boolean;
  //

  constructor() {
    this.isOpen = false
  }

  /*
  Methodes
  */
    // Créer une fonction pour fermer le popin
    public closePopin = () => {
      // Supprimer la classe isOpen
      this.isOpen = false;

      // Attendre le temps de l'animation pour vider popinContent
      setTimeout( () => this.popinContent = undefined, 500 );
    }
  //

  ngOnInit() {

  }

  ngOnChanges( change: SimpleChanges ){
    if( change.popinContent.currentValue !== undefined ){
      setTimeout( () => this.isOpen = true, 100 )
    }
  }

}
