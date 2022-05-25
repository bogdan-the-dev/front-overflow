import {Component, Input} from "@angular/core";
import {Question} from "../../../../model/question.model";
import {TagService} from "../../../../services/tagService";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tag-questions-page-component',
  templateUrl: './tag.questions.page.component.html',
  styleUrls: ['./tag.questions.page.component.scss'],
  providers: [TagService]
})

export class TagQuestionsPageComponent {
  questions: Question[] = []

  constructor(private tagService: TagService, private activatedRoute:ActivatedRoute) {
    this.tagService.getQuestionsByTag(this.activatedRoute.snapshot.params['tag']).subscribe(result => {this.questions = result})
  }

  ngOnInit() {
    this.tagService.getQuestionsByTag(this.activatedRoute.snapshot.params['tag']).subscribe(result => {this.questions = result})
  }

}
