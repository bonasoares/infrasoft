import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `
  <h1>Template Form</h1>
  <app-template-form></app-template-form>
  <h1>Reactive Form</h1>
  <app-reactve-form></app-reactve-form>
  `,
  styles: [`

  `]
})
export class AppComponent {
  title = 'steps';
}
