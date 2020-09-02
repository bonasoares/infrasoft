import { Component, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector : 'app-reactve-form',
  template : `
    <form  [formGroup]="userForm" novalidate >
      <label for="uname">User Name :</label>
      <input formControlName="username" id="uname" type="text" required />
      <span *ngIf="userForm.get('username').invalid && userForm.get('username').touched">User Name is Invalid</span>
      <br/>
      <label for="umail">User eMail :</label>
      <input formControlName="usermail" id="umail" type="text" pattern=".+@.+" required />
      <span *ngIf="userForm.get('usermail').invalid && userForm.get('usermail').touched">User Mail is Invalid</span>
      <br/>
      <label for="uage">User Age :</label>
      <input formControlName="userage" id="uage" type="number" required />
      <span *ngIf="userForm.get('userage').invalid && userForm.get('userage').touched">User Age is Invalid</span>
      <br/>
      <button (click)="clickHandler()" [disabled]="userForm.invalid" type="submit">Login</button>
    </form>
    <br/>
    <button (click)="fillPartialData()"  >Fill Partial</button>
    <button (click)="fillCompleteData()" >Fill Full</button>
    <hr/>
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
export class ReactiveFormComponent implements OnInit{
  userForm:FormGroup;

  ngOnInit(){
    this.userForm = new FormGroup({
        username : new FormControl(),
        usermail : new FormControl(),
        userage : new FormControl()
    });
  }

  clickHandler(){
    let age = this.userForm.get("userage").value;
    if(age < 18){
      alert("you are too young to join us");
    }else if(age > 60){
      alert("you are too old to join us");
    }else{
      alert("you are good to join us");
    }

  };

  fillPartialData(){
    this.userForm.patchValue({
      username : "Batman"
    });
  };
  fillCompleteData(){
    this.userForm.setValue({
      username : "Batman",
      usermail : "bruce@wayne.com",
      userage : "21",
    });
  };

}
