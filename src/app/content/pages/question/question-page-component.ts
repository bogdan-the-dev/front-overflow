import {Component} from "@angular/core";
import {QuestionService} from "../../../../services/questionService";
import {AnswerService} from "../../../../services/answerService";
import {VoteService} from "../../../../services/voteService";
import {Question} from "../../../../model/question.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-question-page-component',
  templateUrl: 'question.page.component.html',
  styleUrls:['question.page.component.scss'],
  providers: [QuestionService, AnswerService, VoteService]
})

export class QuestionPageComponent{
  question!: Question

  constructor(private questionService: QuestionService, private answerService: AnswerService, private voteService: VoteService, private activatedRoute:ActivatedRoute) {
    this.questionService.getQuestion(activatedRoute.snapshot.params['id']).subscribe(result => {this.question = result})
  }

}
