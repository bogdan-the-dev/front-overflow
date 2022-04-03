import {Component, Input} from "@angular/core";
import {Question} from "../../../../model/question.model";

@Component({
  selector: 'app-question-component',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})

export class QuestionComponent{
  @Input() question!: Question


}
