import {Component, ElementRef, ViewChild} from "@angular/core";

@Component({
  selector: 'app-add-question-page-component',
  templateUrl: './add-question.page.component.html',
  styleUrls: ['./add-question.page.component.scss']
})

export class AddQuestionPageComponent {
  tags: string[] = []
  @ViewChild('tag') tagField!: ElementRef



  addTag() {
    let tag:string = this.tagField.nativeElement.value
    this.tagField.nativeElement.value = ''
    this.tags.push(tag)
  }

}
