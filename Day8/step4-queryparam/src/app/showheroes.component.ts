import { Component } from '@angular/core';
import { HeroServices } from './hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    template:`
    <h2> Show Heroes </h2>
    Filter for Title : <input type="text" [(ngModel)]="filterby">
    <table border="1" width="100%">
    	<thead>
    		<tr>
    			<td>Sl #</td>
    			<td>Title</td>
    			<td>Real Name</td>
    			<td>More Details</td>
    		</tr>
    	</thead>
    	<tbody>
        <tr *ngFor="let hero of heroes | herofilter : filterby">
          <td>{{ hero.id }}</td>
          <td>{{ hero.name }}</td>
          <td>{{ hero.biography["full-name"] }}</td>
          <td>
            <a 
            [routerLink]="['hero']" 
            [queryParams]="{hid : hero.id, filterdata : filterby}">Details</a>
          </td>
        </tr>
    	</tbody>
    </table>
    `
  })
  export class ShowHeroes{
    heroes = [];
    filterby = "";
    constructor(private hd:HeroServices, private ar:ActivatedRoute ){ 
    } 
    ngOnInit(){
      this.heroes = this.hd.getData().heroes;
      this.filterby = this.ar.snapshot.queryParams['filterdata'] || "";
    }
    
  }