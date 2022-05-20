import {Injectable} from "@angular/core";
import {Question} from "../model/question.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable()
export class QuestionService{

  private addQuestionEndpoint: string = 'http://localhost:8080/questions/create-question'
  private updateQuestionEndpoint: string = 'http://localhost:8080/questions/save-question'
  private deleteQuestionEndpoint: string = 'http://localhost:8080/questions/delete-question?id='
  private searchQuestionEndpoint: string = 'http://localhost:8080/questions/search?name='


  private httpOptions!: {};

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      responseType: 'text',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }


  getAllQuestions():Observable<Question[]> {

    return this.httpClient.get<Question[]>('http://localhost:8080/questions/all-questions')
  }

  getQuestion(id: number): Observable<Question> {
    return this.httpClient.get<Question>('http://localhost:8080/questions/find-question?id=' + id)
  }

  getQuestionsByUser(username: String): Observable<Question[]> {
    return this.httpClient.get<Question[]>('http://localhost:8080/questions/find-by-user?username=' + username)
  }

  addNewQuestion(question: Question): Observable<Question> {
    return this.httpClient.post<Question>(this.addQuestionEndpoint, question)
  }

  updateQuestion(questionDTO: Question): Observable<Question> {
    return this.httpClient.put<Question>(this.updateQuestionEndpoint, questionDTO)
  }

  deleteQuestion(id: number | undefined): Observable<string> {
    return this.httpClient.delete<string>(this.deleteQuestionEndpoint + id, this.httpOptions)
  }

  getQuestionsSearch(name: string): Observable<Question[]> {
    return this.httpClient.get<Question[]>(this.searchQuestionEndpoint + name)
  }
}
