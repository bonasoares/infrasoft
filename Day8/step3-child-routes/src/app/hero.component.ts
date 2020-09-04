import { Component } from "@angular/core";
import { HeroServices } from "./hero.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    template : `
    <h1>Selected Hero</h1>
    <a [routerLink]="['']">Back to List</a> | 
    <a [routerLink]="['edit', params]">Edit</a> | 
    <a [routerLink]="['edit', { 'intelligence':intel, 'race' : race }]">Sending Optional parameters</a>
    <br>
    <input type="range" [(ngModel)]="params">
    <span style="font-size:36px; color:red">{{ params }}</span>
    <br>
    <label for="">Intelligence : 
        <input type="range" [(ngModel)]="intel">
    </label>
    <br>
    <label for="">Race : 
        <input type="text" [(ngModel)]="race">
    </label>
    <hr>
    <h3>{{ selhero }} | {{ heroes[selhero-1].name }}</h3>
    image size : 
    <input [(ngModel)]="wide" type="range" min="50" max="300" value="100">{{ wide }}
    <img width="{{ wide }}" 
         src="assets/{{ heroes[selhero-1].image.url }}" 
         alt="{{ heroes[selhero-1].name }}">
    <hr>
    <router-outlet></router-outlet>
    `
})
export class HeroComponent{
    heroes = [];
    params = 0;
    selhero = 0;
    wide = 0;
    constructor(private hd:HeroServices, private ar:ActivatedRoute ){ 
      this.heroes = hd.getData().heroes;
    };
    ngOnInit() {
      this.selhero = this.ar.snapshot.params['id'];
    };
}