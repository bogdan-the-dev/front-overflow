import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user.model";
import {loginDTO} from "../model/loginDTO.model";
import {AuthenticationDTO} from "../model/authenticationDTO.model";
import {RegisterDTO} from "../model/registerDTO.model";

@Injectable()
export class UserService{
  private loginDTOURL: string = 'http://localhost:8080/authentication/login'
  private registerUserURL: string = 'http://localhost:8080/authentication/registerUser'
  private banUserURL: string = 'http://localhost:8080/users/ban-user?username='

  httpOptions!: {};
  constructor(private httpClient:HttpClient) {
    this.httpOptions = {
      responseType: 'text',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
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

  login(loginDTO: loginDTO): Observable<AuthenticationDTO> {
    return this.httpClient.post<AuthenticationDTO>(this.loginDTOURL, loginDTO)
  }

  registerRegularUser(registerDTO: RegisterDTO) : Observable<string> {
    return this.httpClient.post<string>(this.registerUserURL, registerDTO, this.httpOptions)
  }

  banUser(username: string) {
    return this.httpClient.post<string>(this.banUserURL + username, null,this.httpOptions)
  }
}
