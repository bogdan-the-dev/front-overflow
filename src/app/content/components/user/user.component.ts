import {Component, Input} from "@angular/core";
import {User} from "../../../../model/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-component',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss'],
})

export class UserComponent {
  @Input() user!:User

  constructor(private router:Router) {
  }

  goToUserPage() {
    if(this.user.username != undefined)
      this.router.navigate(['users','user', this.user.username])
  }
}
