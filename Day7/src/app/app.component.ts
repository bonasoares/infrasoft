import { Component, OnInit } from '@angular/core';
import { FriendService } from './friend.services';

@Component({
  selector: 'app-root',
  template : `
  <ul>
    <li *ngFor="let friend of friendslist">
    {{ friend.username+" "+ friend.usermail+" "+friend.userage }}
    <button (click)="editFriend(friend)"> Edit Info </button>
    <button (click)="deleteFriend(friend)"> Delete Friend </button>
    </li>
  </ul>
  <hr/>
  <label for="uname">Friend Name : </label> <input [(ngModel)]="friend.username" id="uname" /><br/>
  <label for="umail">Friend Mail : </label> <input [(ngModel)]="friend.usermail" id="umail" /><br/>
  <label for="uage">Friend Age : </label> <input [(ngModel)]="friend.userage" id="uage" /><br/>
  <button class="btn" (click)="addFriend()"> Add Friend </button>
  `,
  styles: [`
  label, input, .btn{
    width : 150px;
    display :inline-block;
    padding : 5px;
    margin : 3px;
    font-size : 20px;
  }
  .btn{
    margin-left : 166px;
  }

  `]
})
export class AppComponent implements OnInit {
  friend = {
    username : '',
    usermail : '',
    userage : ''
  };
  editfriend = {
    username : '',
    usermail : '',
    userage : ''
  };
  friendslist;
  title = 'steps';

  constructor( private fs:FriendService ){}

  ngOnInit(){
    this.getFriendsData();
  }

  getFriendsData(){
    this.fs.getFriendList().subscribe((serverdata) => {
      this.friendslist = serverdata;
      console.log(serverdata)
    })
  }

  addFriend(){
      this.fs.createFriend(this.friend).subscribe( (friendsdata) => {
          console.log(friendsdata);
          this.getFriendsData();
          this.friend = {
            username : '',
            usermail : '',
            userage : ''
          };
      });
  };


  editFriend(friend){
    this.fs.getFriendToUpdate(friend).subscribe( (editFriendData) => {
        // this.editfriend = editFriendData;
        console.log(editFriendData);
    })
  };

  deleteFriend(friend){
      this.fs.deleteFriend(friend).subscribe( (message)=>{
        console.log(message);
        this.getFriendsData();
      })
  };

}
