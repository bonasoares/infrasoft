import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="box">
    <h1> Main Application | {{ title }} </h1>
    <hr>
    <app-child (childEvent)="childEventHandler($event)" childTitle="it is working">
      <h1> Heading 1 </h1>
      <h2> Heading 2 </h2>
      <h3> Heading 3 </h3>
      <h4> Heading 4 </h4>
    </app-child>
    </div>
  `,
  styles: [`
    .box{
      width : 650px;
      height : 400px;
      margin : 10px auto;
      padding : 10px;
      background-color : silver;
    }
  `]
})
export class AppComponent {
  title = 'Hello Child Component';

  childEventHandler(msg){
      this.title = msg;
  }
}
