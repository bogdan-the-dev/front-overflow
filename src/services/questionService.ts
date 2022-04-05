import {Injectable} from "@angular/core";
import {Question} from "../model/question.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable()
export class QuestionService{
  constructor(private httpClient: HttpClient) {}

  getAllQuestions():Observable<Question[]> {

    return this.httpClient.get<Question[]>('http://localhost:8080/questions/all-questions')
  }

  getQuestion(id: number): Observable<Question> {
    return this.httpClient.get<Question>('http://localhost:8080/questions/find-question?id=' + id)
  }

  getQuestionsByUser(username: String): Observable<Question[]> {
    return this.httpClient.get<Question[]>('http://localhost:8080/questions/find-by-user?username=' + username)
  }

}
