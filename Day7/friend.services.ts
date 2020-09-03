import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http"

@Injectable()
export class FriendService{

  constructor(private http:HttpClient){};

  // READ
  getFriendList(){
    this.http.get("http://localhost:2525/");
  };

  // CREATE
  createFriend(friend){
    this.http.post("http://localhost:2525/", friend);
  };

  //BEFORE UPDATE
  getFriendToUpdate(friend){
    this.http.get("http://localhost:2525/"+friend['_id']);
  };

  //AFTER UPDATE
  updateFriend(friend){
    this.http.post("http://localhost:2525/"+friend['_id'], friend);
  };

  //DELETE
  deleteFriend(friend){
    this.http.get("http://localhost:2525/"+friend['_id'], friend);
  };

}
