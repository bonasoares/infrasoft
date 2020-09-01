import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
  selector : 'app-child',
  template : `
  <div class="box">
    <h1>Child Component</h1>
    <!--ng-content></ng-content-->
    <!--ng-content select="h2"></ng-content>
    <ng-content select="h1"></ng-content-->

    <h1>{{ childTitle }}</h1>
    <input #ip />
    <button (click)="clickHandler(ip.value)">Click Me</button>
  </div>
  `,
  styles: [`
  .box{
    height : 300px;
    margin : 10px auto;
    background-color : grey;
    border : 1px solid grey;
  }
`]
})
export class ChildComponent{
  @Input() childTitle = 'default child value';
  @Output() childEvent = new EventEmitter();

  clickHandler(vals){
    this.childEvent.emit(vals);
  };

}
