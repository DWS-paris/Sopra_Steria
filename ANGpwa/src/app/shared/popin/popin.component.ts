import { Component, OnInit, input } from '@angular/core';

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
  `]
})
export class PopinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
