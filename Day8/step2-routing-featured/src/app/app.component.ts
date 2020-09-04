import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Application Component</h1>
  <hr>
  <a [routerLink]="['']">Home</a> | 
  <a [routerLink]="['hero']"> Hero</a> | 
  <a [routerLink]="['addhero']">Add Hero</a> | 
  <a [routerLink]="['edithero']">Edit Hero</a> | 
  <a [routerLink]="['heroes']">Hero List</a> | 
  <a [routerLink]="['movie']">Movie</a> | 
  <a [routerLink]="['movies']">Movie List</a> | 
  <a [routerLink]="['addmovie']">Add Movie</a> | 
  <a [routerLink]="['editmovie']">Edit Movie</a>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'step12-routing-featured';
}
