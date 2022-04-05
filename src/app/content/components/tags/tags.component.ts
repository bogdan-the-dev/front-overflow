import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})

export class TagsComponent {
  @Input() tags: string[] = []

  constructor(private router:Router) {
  }

  getQuestionsByTag(tag:string) {
    this.router.navigate(['tags','questions',tag])
  }
}
