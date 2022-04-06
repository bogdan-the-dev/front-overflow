import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {QuestionService} from "./questionService";
import {Question} from "../model/question.model";


describe('test module for question service', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [QuestionService]})
  })

  it('i should be able to create the service', () => {
    const service: QuestionService = TestBed.get(QuestionService)
    expect(service).toBeTruthy()
  })

  it('i should receive a number of users greater than 0', () => {
    const service:QuestionService = TestBed.get(QuestionService)
    let questions: Question[] = []
    service.getAllQuestions().subscribe(result => {
      questions = result
      expect(questions.length > 0).toBeTrue()
    })

  })

})
