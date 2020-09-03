import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http"

@Injectable()
export class FriendService{

  constructor(private http:HttpClient){};

  // READ
  getFriendList(){
    return this.http.get("http://localhost:2525/");
  };

  // CREATE
  createFriend(friend){
    return this.http.post("http://localhost:2525/", friend);
  };

  //BEFORE UPDATE
  getFriendToUpdate(friend){
    return this.http.get("http://localhost:2525/"+friend['_id']);
  };

  //AFTER UPDATE
  updateFriend(friend){
    return this.http.post("http://localhost:2525/"+friend['_id'], friend);
  };

  //DELETE
  deleteFriend(friend){
    return this.http.get("http://localhost:2525/"+friend['_id'], friend);
  };

}
