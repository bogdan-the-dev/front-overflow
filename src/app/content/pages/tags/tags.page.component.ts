import {Component} from "@angular/core";
import {TagService} from "../../../../services/tagService";
import {Tag} from "../../../../model/tag.model";

@Component({
  selector: 'app-tags-page-component',
  templateUrl: './tags.page.component.html',
  styleUrls: ['./tags.page.component.scss'],
  providers: [TagService]
})

export class TagsPageComponent {
  tags!:Tag[]
  constructor(private tagService:TagService) {
    tagService.getAllTags().subscribe(result => {this.tags = result})
  }
}
