import {Component, ElementRef, ViewChild} from "@angular/core";
import {loginDTO} from "../../../../model/loginDTO.model";
import {UserService} from "../../../../services/userService";
import {Router} from "@angular/router";
import {AlertifyService} from "../../../../services/alertifyService";

@Component({
  selector: 'app-login-page-component',
  templateUrl: './login.page.component.html',
  styleUrls: ['./login.page.component.scss'],
  providers: [UserService, AlertifyService]
})

export class LoginPageComponent {
  constructor(private userService: UserService, private router: Router, private alertifyService: AlertifyService) {
  }
  @ViewChild('username') usernameElement!: ElementRef
  @ViewChild('password') passwordElement!: ElementRef
  login() {
    const username = this.usernameElement.nativeElement.value
    const password = this.passwordElement.nativeElement.value
    let loginDTO: loginDTO = {username: username, password: password}
    this.userService.login(loginDTO).subscribe(res => {
      if(res.errorMessage == undefined) {
        localStorage['userId'] = res.userId
        localStorage['username'] = res.username
        localStorage.setItem('userRole', JSON.stringify(res.role))
        this.alertifyService.success("Login successful")
        this.router.navigate(['/home'])
      } else {
        this.alertifyService.error(res.errorMessage)
      }
    })
  }
}
