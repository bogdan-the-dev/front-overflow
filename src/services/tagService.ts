import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Question} from "../model/question.model";
import {Tag} from "../model/tag.model";

@Injectable()

export class TagService {
  constructor(private httpClient: HttpClient) {}

  getAllTags(): Observable<Tag[]> {
    return this.httpClient.get<Tag[]>('http://localhost:8080/tag/all-tags')
  }

  getQuestionsByTag(tag: string): Observable<Question[]> {
    return this.httpClient.get<Question[]>('http://localhost:8080/tags/find?name=' + tag)
  }
}
