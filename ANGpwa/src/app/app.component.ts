/*
Import
*/
  import { Component } from '@angular/core';
//


/*
Definition
*/
  @Component({
    selector: 'app-root',
    template: `
      <header>
        <app-header></app-header>
      </header>
      
      <main>
        <router-outlet></router-outlet>
      </main>
    `
  })
//

/*
Export
*/
  export class AppComponent {}
//