import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Vote} from "../model/vote.model";
import {Observable} from "rxjs";

@Injectable()
export class VoteService{
  private getVoteEndpoint: string = 'http://localhost:8080/vote/get-vote'
  private addVoteEndpoint: string = 'http://localhost:8080/vote/add-vote'
  private changeVoteEndpoint: string = 'http://localhost:8080/vote/change-vote'
  private deleteVoteEndpoint: string = 'http://localhost:8080/vote/delete-vote'

  private httpOptions!: {};

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      responseType: 'text',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

  getVote(voteDTO:Vote): Observable<Vote> {
    return this.httpClient.post<Vote>(this.getVoteEndpoint, voteDTO)
  }

  vote(voteDTO: Vote): Observable<Vote> {
    return this.httpClient.post<Vote>(this.addVoteEndpoint, voteDTO)
  }

  changeVote(voteDTO:Vote): Observable<Vote> {
    return this.httpClient.put<Vote>(this.changeVoteEndpoint, voteDTO)
  }

  deleteVote(voteDTO:Vote): Observable<Vote> {
    return this.httpClient.post<Vote>(this.deleteVoteEndpoint, voteDTO)
  }
}
