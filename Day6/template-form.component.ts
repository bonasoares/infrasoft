import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
@Component({
  selector : 'app-template-form',
  template : `
    <form action="#" (submit)="formSubmitHandler($event, myForm)" name="myform" #myForm="ngForm" novalidate>
      <label for="uname">User Name :</label>
      <input id="uname" type="text" #unameInput="ngModel" [(ngModel)]="tiname" name="username" required />
      <span *ngIf="unameInput.invalid && unameInput.touched">User Name is Invalid</span>
      <br/>
      <label for="umail">User eMail :</label>
      <input id="umail" type="text" #umailInput="ngModel" pattern=".+@.+" [(ngModel)]="timail" name="useremail" required />
      <span *ngIf="umailInput.invalid && umailInput.touched">User Mail is Invalid</span>
      <br/>
      <label for="uage">User Age :</label>
      <input id="uage" type="number" min="18" max="60" step="1" #uageInput="ngModel" [(ngModel)]="tiage" name="userage" required />
      <span *ngIf="uageInput.invalid && uageInput.touched">User Age is Invalid</span>
      <br/>
      <button [disabled]="myForm.invalid" type="submit">Login</button>
    </form>
    <hr/>
    <p>{{ tiname }}</p>
    <p>{{ timail }}</p>
    <p>{{ tiage }}</p>
    <hr/>
    <p *ngIf="unameInput.invalid">Name Input is Invalid</p>
    <p *ngIf="unameInput.valid">Name Input is Valid</p>
    <p *ngIf="unameInput.touched">Name Input is Touched</p>
    <p *ngIf="unameInput.untouched">Name Input is Untouched</p>
    <p *ngIf="unameInput.pristine">Name Input is Pristine</p>
    <p *ngIf="unameInput.dirty">Name Input is Dirty</p>
    <hr/>
    <p *ngIf="umailInput.invalid">eMail Input is Invalid</p>
    <p *ngIf="umailInput.valid">eMail Input is Valid</p>
    <p *ngIf="umailInput.touched">eMail Input is Touched</p>
    <p *ngIf="umailInput.untouched">eMail Input is Untouched</p>
    <p *ngIf="umailInput.pristine">eMail Input is Pristine</p>
    <p *ngIf="umailInput.dirty">eMail Input is Dirty</p>
    <hr/>
    <p *ngIf="uageInput.invalid">Age Input is Invalid</p>
    <p *ngIf="uageInput.valid">Age Input is Valid</p>
    <p *ngIf="uageInput.touched">Age Input is Touched</p>
    <p *ngIf="uageInput.untouched">Age Input is Untouched</p>
    <p *ngIf="uageInput.pristine">Age Input is Pristine</p>
    <p *ngIf="uageInput.dirty">Age Input is Dirty</p>
  `,
  styles : [`
    label{
      width :100px;
      padding : 5px;
      display : inline-block;
    }
    button{
      width :100px;
      padding : 5px;
      display : inline-block;
      margin-left : 110px;
    }
    input.ng-invalid.ng-touched{
        border : 3px solid crimson;
    }
    input.ng-valid.ng-touched{
        border : 3px solid darkseagreen;
    }

  `]
})
export class TemplateForm{
  tiname;
  timail;
  tiage;

  formSubmitHandler(evt, form:NgForm){
    evt.preventDefault();
    let age = form.controls.userage.value;
    if(age < 18){
      alert("you are too young to join us");
    }else if(age > 60){
      alert("you are too old to join us");
    }else{
      alert("you are good to join us");
      form.ngSubmit.emit();
    }

  }

}
