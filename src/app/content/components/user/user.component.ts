import {Component, Input} from "@angular/core";
import {User} from "../../../../model/user.model";
import {Router} from "@angular/router";
import {Role} from "../../../../model/role.model";
import {AlertifyService} from "../../../../services/alertifyService";
import {UserService} from "../../../../services/userService";

@Component({
  selector: 'app-user-component',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss'],
  providers: [UserService]

})

export class UserComponent {
  @Input() user!:User

  constructor(private router:Router, private alertifyService: AlertifyService, private userService: UserService) {
  }
  banUser() {
    if (this.user.username == localStorage['username']) {
      this.alertifyService.warning('You can\'t ban yourself')
    } else {
      this.alertifyService.confirm('Ban user "' + this.user.username + '"?', () => {
        console.log('before ban')
        this.userService.banUser(this.user.username).subscribe(res => {
          console.log('after')
          console.log(res)
          this.alertifyService.message(res)
          let currentUrl = this. router. url
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([currentUrl])

        })
      })
    }
  }

  displayBanButton(): boolean{
    return localStorage['username'] && this.isModerator() && !this.user.accountBanned;
  }

  isModerator():boolean {
    let role:Role = JSON.parse(localStorage['userRole'])
    return role.name == 'moderator'
  }

  goToUserPage() {
    if(this.user.username != undefined)
      this.router.navigate(['users','user', this.user.username])
  }
}
