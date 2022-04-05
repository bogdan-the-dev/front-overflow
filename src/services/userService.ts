import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user.model";

@Injectable()
export class UserService{

  constructor(private httpClient:HttpClient) {
  }

  getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>('http://localhost:8080/users/all-users')
  }

  getUserById(id:number):Observable<User>{
    return this.httpClient.get<User>('http://localhost:8080/users/find-user?id=' + id)
  }

  getUserByUsername(username:String):Observable<User>{
    return this.httpClient.get<User>('http://localhost:8080/users/search?name=' + username)
  }

}
