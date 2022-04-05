import {Question} from "../../../../model/question.model";
import {QuestionService} from "../../../../services/questionService";
import {Component} from "@angular/core";

@Component({
  selector: 'app-questions-page-component',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.scss'],
  providers: [QuestionService]
})


export class QuestionsPageComponent {
  questions: Question[] = []

  constructor(private questionService: QuestionService) {
    this.questionService.getAllQuestions().subscribe(response => {
      this.questions = response
    })
  }
  redirectToCreateQuestion() {

  }

}
