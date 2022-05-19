import {Component, ElementRef, ViewChild} from "@angular/core";
import {UserService} from "../../../../services/userService";
import {Router} from "@angular/router";
import {RegisterDTO} from "../../../../model/registerDTO.model";
import {AlertifyService} from "../../../../services/alertifyService";

@Component({
  selector: 'app-register-page-component',
  templateUrl: './register.page.component.html',
  styleUrls: ['./register.page.component.scss'],
  providers: [UserService]
})

export class RegisterPageComponent {

  constructor(private userService: UserService, private router:Router, private alertifyService: AlertifyService) {
  }
  @ViewChild('username') usernameElement!: ElementRef
  @ViewChild('email') emailElement!: ElementRef
  @ViewChild('password') passwordElement!: ElementRef
  @ViewChild('confirmPassword') confirmPasswordElement!: ElementRef

  registerUser() {
    const username = this.usernameElement.nativeElement.value
    const email = this.emailElement.nativeElement.value
    const password = this.passwordElement.nativeElement.value
    const confirmPassword = this.confirmPasswordElement.nativeElement.value
    let registerDTO: RegisterDTO = {username: username, password: password, passwordValidation: confirmPassword, email: email}
    this.userService.registerRegularUser(registerDTO).subscribe(res => {
      if(res == "User created") {
        this.alertifyService.success(res)
        this.router.navigate(['/login'])
      } else {
        this.alertifyService.error(res)
      }
    })

  }
}
