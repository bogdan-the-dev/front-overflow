import {Component} from "@angular/core";
import {AlertifyService} from "../../../../services/alertifyService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss','../../../../../external_styles/fontawesome/scss/fontawesome.scss'],
  providers: [AlertifyService]
})


export class NavigationBarComponent
{
  constructor(private alertifyService: AlertifyService, private router:Router) {
  }

  isLoggedIn(): boolean {
    return localStorage["username"];
  }

  getUsername(): string {
    return localStorage['username']
  }

  goToUser() {
    this.router.navigate(['/users/user/' + localStorage['username']])
  }

  logout() {
    this.alertifyService.confirm("Do you want to log out?", () => {
      localStorage.clear()
      this.router.navigate(['/home'])
    })

  }
}
