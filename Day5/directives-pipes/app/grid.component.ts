import { Component, Input } from "@angular/core"
import { HeroService } from './herodata.service';

@Component({
  selector : 'app-grid',
  template : `
  <table class="table table-hover">
    <thead class="thead-dark">
        <tr>
          <th>Sl #</th>
          <th>Title </th>
          <th>Full Name</th>
          <th>Poster</th>
          <th>City</th>
          <th>Ticket Cost</th>
          <th>Release Date</th>
          <th>Movies Count</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let hero of gridData">
          <td>{{ hero.sl }}</td>
          <td>{{ hero.title | lowercase | titlecase | gen : hero.gender }}</td>
          <td>{{ hero.firstname+' '+hero.lastname }}</td>
          <td>
            <img width="50" src="{{ hero.poster }}" />
          </td>
          <td>{{ hero.city }}</td>
          <td>{{ hero.ticketprice | currency : 'INR' : 'symbol' : '3.2-2'}}</td>
          <td>{{ hero.releasedate | date : 'dd / MMM / yyyy' }}</td>
          <td>{{ hero.movieslist.length }}</td>
        </tr>
    </tbody>
  </table>
  `
})
export class GridComponent{
   @Input('data') gridData = [];
  //gridData = [];
  /*
  constructor( private hs:HeroService ){
    this.gridData = hs.getHeroData();
   }
*/
}
