import {Component, ElementRef, ViewChild} from "@angular/core";
import {QuestionService} from "../../../../services/questionService";
import {AnswerService} from "../../../../services/answerService";
import {VoteService} from "../../../../services/voteService";
import {Question} from "../../../../model/question.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertifyService} from "../../../../services/alertifyService";
import {Answer} from "../../../../model/answer.model";

@Component({
  selector: 'app-question-page-component',
  templateUrl: 'question.page.component.html',
  styleUrls:['question.page.component.scss'],
  providers: [QuestionService, AnswerService, VoteService, AlertifyService]
})

export class QuestionPageComponent{
  question!: Question

  @ViewChild('answerBody') answerBodyElement!: ElementRef

  constructor(private router:Router, private alertifyService:AlertifyService, private questionService: QuestionService, private answerService: AnswerService, private voteService: VoteService, private activatedRoute:ActivatedRoute) {
    this.questionService.getQuestion(activatedRoute.snapshot.params['id']).subscribe(result => {this.question = result})
  }

  addAnswer() {
    const answer: string = this.answerBodyElement.nativeElement.value
    if(answer.length == 0)
    {
      this.alertifyService.warning('Answer can\'t be empty')
    } else {
      let date:Date = new Date()
      date.setHours(date.getHours() + 3)
      let answerDTO: Answer = {id:undefined, username: localStorage['username'], answerBody: answer, date: date, edited: false, upVotes: 0, downVotes: 0, questionId: this.question.questionId, userScore: undefined}
      this.answerService.addAnswer(answerDTO).subscribe(res => {
        if(res == undefined || res.questionId == undefined) {
          this.alertifyService.error('Something went wrong')
        } else {
          this.alertifyService.success("Answer added")
          let currentUrl = this. router. url
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([currentUrl])

        }
      })
    }


  }

  isLoggedIn(): boolean {
    return localStorage['username']
  }
}
