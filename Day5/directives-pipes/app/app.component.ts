import { Component } from '@angular/core';
import { HeroService } from './herodata.service';

@Component({
  selector: 'app-root',
  template : `
  <h1> Welcome to Day 5 of the training </h1>
  <app-header [data]="heroes"></app-header>
  <!--app-header></app-header-->
  <app-grid [data]="heroes"></app-grid>
  <!--app-grid></app-grid-->
  `
})
export class AppComponent {
  title = 'steps';
  heroes = [];

  constructor( private hs:HeroService ){
      this.heroes = this.hs.getHeroData();
  }
}
