import {Question} from "../../../../model/question.model";
import {QuestionService} from "../../../../services/questionService";
import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-questions-page-component',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.scss'],
  providers: [QuestionService]
})


export class QuestionsPageComponent {
  questions: Question[] = []

  constructor(private questionService: QuestionService, private router:Router, private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      let text = param["search"]
      if (text == undefined)
        this.questionService.getAllQuestions().subscribe(response => {
          this.questions = response
        })
      else {
        this.questionService.getQuestionsSearch(text).subscribe(res => {
          this.questions = res
        })
      }
    })
  }

  redirectToCreateQuestion() {
    this.router.navigate(['questions', 'add-question'])
  }
  isLoggedIn() : boolean {
    return localStorage['username']
  }
}
