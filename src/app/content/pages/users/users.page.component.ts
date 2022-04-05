import {Component} from "@angular/core";
import {UserService} from "../../../../services/userService";
import {User} from "../../../../model/user.model";

@Component({
  selector: 'app-users-page-component',
  templateUrl: 'users.page.component.html',
  styleUrls: ['users.page.component.scss'],
  providers: [UserService]
})

export class UsersPageComponent {
  users:User[]=[]

  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(result => {this.users = result})
  }
}
