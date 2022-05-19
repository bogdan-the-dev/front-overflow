import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Answer} from "../model/answer.model";
import {Observable} from "rxjs";

@Injectable()
export class AnswerService{
  private addAnswerEndpoint: string = 'http://localhost:8080/answers/create'
  private deleteAnswerEndpoint: string = 'http://localhost:8080/answers/delete?id='
  private updateAnswerEndpoint: string = 'http://localhost:8080/answers/edit'

  private httpOptions!: {};

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      responseType: 'text',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

  addAnswer(answer: Answer):Observable<Answer> {
    return this.httpClient.post<Answer>(this.addAnswerEndpoint, answer)
  }

  deleteAnswer(answerId: number | undefined):Observable<string> {
    return this.httpClient.delete<string>(this.deleteAnswerEndpoint + answerId, this.httpOptions)
  }

  updateAnswer(answer: Answer): Observable<Answer> {
    return this.httpClient.put<Answer>(this.updateAnswerEndpoint, answer)
  }

}
