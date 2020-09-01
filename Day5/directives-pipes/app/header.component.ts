import { Component, Input } from "@angular/core";
import { HeroService } from './herodata.service';

@Component({
  selector : 'app-header',
  template : `
  <ul class="nav justify-content-center">
    <li class="nav-item" *ngFor="let hero of headerData">
      <a class="nav-link" href="#">{{ hero.title }}</a>
    </li>
  </ul>
  `
})
export class HeaderComponent{
   @Input('data') headerData = [];

 // headerData = [];

    //  constructor(){
    //    this.hs = new HeroService();
    //    this.headerData = this.hs.getHeroData();
    //  }
  /*
  constructor( private hs:HeroService ){
    this.headerData = hs.getHeroData();
  }
  */
}
