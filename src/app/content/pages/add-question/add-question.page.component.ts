import {Component, ElementRef, ViewChild} from "@angular/core";
import {Question} from "../../../../model/question.model";
import {QuestionService} from "../../../../services/questionService";
import {AlertifyService} from "../../../../services/alertifyService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-question-page-component',
  templateUrl: './add-question.page.component.html',
  styleUrls: ['./add-question.page.component.scss'],
  providers: [QuestionService, AlertifyService]
})

export class AddQuestionPageComponent {
  tags: string[] = []
  @ViewChild('tag') tagField!: ElementRef
  @ViewChild('questionTitle') titleField!: ElementRef
  @ViewChild('questionBody') bodyField!: ElementRef

  constructor(private questionService: QuestionService, private alertifyService: AlertifyService, private router:Router) {
  }

  addQuestion() {
    const username = localStorage['username']
    let questionDTO : Question = {title: this.titleField.nativeElement.value,
      text: this.bodyField.nativeElement.value, upVotes: 0, downVotes: 0, tags: this.tags, username: username, creationDate: new Date(), questionId: undefined, answers: undefined}
    this.questionService.addNewQuestion(questionDTO).subscribe(res => {
      if(res.questionId == undefined) {
        this.alertifyService.warning('Something went wrong :\'(')
      }
      else {
        this.alertifyService.success('Question added')
        this.router.navigate(['questions/question/' + res.questionId])
      }
    })
  }

  addTag() {
    let tag:string = this.tagField.nativeElement.value
    this.tagField.nativeElement.value = ''
    this.tags.push(tag)
  }

}
