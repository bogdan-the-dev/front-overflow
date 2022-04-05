import {Component, Input} from "@angular/core";
import {Question} from "../../../../model/question.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-question-component',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})

export class QuestionComponent{
  @Input() question!: Question
  constructor(private router:Router) {

  }
  redirectToQuestionPage() {
    this.router.navigate(['questions', 'question', this.question.questionId])
  }
}
