import {Component, Input} from "@angular/core";
import {QuestionService} from "../../../../services/questionService";
import {Answer} from "../../../../model/answer.model";

@Component({
  selector: 'app-answer-component',
  templateUrl: 'answer.component.html',
  styleUrls: ['answer-component.scss'],
  providers: [QuestionService]
})

export class AnswerComponent {
  @Input() answer!:Answer

  constructor() {
  }
}
