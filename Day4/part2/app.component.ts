import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `
  1
  <h1>{{ title }}</h1>
  2
  <h1 innerHTML="{{title}}"></h1>
  3
  <h1 [innerHTML]="title"></h1>
  4
  <h1 [innerText]="title"></h1>
  5
  <h1 [textContent]="title"></h1>
  6
  <h1 bind-innerHTML="title"></h1>
  <app-first></app-first>
  <app-header></app-header>
  <app-first></app-first>
  <button (click)="clickHandler($event)">First Button</button>
  <button on-click="clickHandler($event)">Second Button</button>
  <p style="color : {{col1}}">
    Welcome to your life... There's no turning back..
  </p>
  <p [style.color]="col2">
    Welcome to your life... There's no turning back..
  </p>
  <p [ngStyle]="{'color' : col3, 'font-size': fs}">
    Welcome to your life... There's no turning back..
  </p>
  <hr>
  <p [ngClass]="['box','boxer']">
    Hello Infrasoft
  </p>
  <p class="box blueboxer" >
    Hello Infrasoft
  </p>
  <input type="checkbox" (change)="redcorner = !redcorner" />
  <p class="box" [class.redboxer]="redcorner" >
    Hello Infrasoft
  </p>
  <p ngNonBindable > Hello Infrasoft {{ hello there }} </p>
<hr/>

 <ng-template [ngIf]="redcorner">
   <p> Show if RedCorner is True </p>
 </ng-template>

 <p *ngIf="redcorner"> Show if RedCorner is True </p>
 <hr/>

  <ol>
   <li>{{ heroes[0] }}</li>
   <li>{{ heroes[1] }}</li>
   <li>{{ heroes[2] }}</li>
   <li>{{ heroes[3] }}</li>
  </ol>

  <ol>
   <li *ngFor="let hero of heroes ">{{ hero }}</li>
  </ol>

  <input class="redboxer" #ti type="text" />
  <button (click)="showAlert(ti.value)">Read Data</button>
  <br/>
  <h1>{{ title }}</h1>
  <br/>
  <input #valchange [value]="title" (input)=" title = valchange.value " />
  <br/>
  <input [(ngModel)]="title"/>

  `,
  styles : [`
    .box{
      width : 150px;
      height : 50px;
      margin : 10px auto;
      border : 2px solid darkgrey;
    }
    .redboxer{
      background-color : crimson;
    }
    .blueboxer{
      background-color : blue;
    }
  `]
})
export class AppComponent {
  title = 'Welcome to your life';
  col1 = 'red';
  col2 = 'green';
  redcorner = false;
  col3 = 'blue';
  fs = '24px';

  heroes = ['Batman', 'Ironman', 'Antman', 'Captain America', 'Black Widow', 'Hulk']

  clickHandler(evt){
    alert("you clicked "+evt.target.innerHTML);
  };

  showAlert(message){
    alert(message)
  }
}
