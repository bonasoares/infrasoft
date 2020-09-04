import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `
  <h1>Routing with Parameters</h1>
  <hr>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'step14queryparam';
}
