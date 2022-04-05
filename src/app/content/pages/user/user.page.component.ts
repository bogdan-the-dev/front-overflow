import {Component} from "@angular/core";
import {User} from "../../../../model/user.model";
import {Question} from "../../../../model/question.model";
import {UserService} from "../../../../services/userService";
import {QuestionService} from "../../../../services/questionService";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-page-selector',
  templateUrl: 'user.page.component.html',
  styleUrls: ['user.page.component.scss'],
  providers: [UserService, QuestionService]
})

export class UserPageComponent {
  user!: User
  userQuestions: Question[]=[]

  constructor(private userService: UserService, private questionService: QuestionService, private activatedRoute:ActivatedRoute) {
    this.userService.getUserByUsername(activatedRoute.snapshot.params['username']).subscribe(result => {this.user = result; this.questionService.getQuestionsByUser(this.user.username).subscribe(result => {this.userQuestions = result})
    })
    }
}
