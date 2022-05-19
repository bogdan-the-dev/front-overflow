import {Component, ElementRef, Input, ViewChild} from "@angular/core";
import {QuestionService} from "../../../../services/questionService";
import {Answer} from "../../../../model/answer.model";
import {Role} from "../../../../model/role.model";
import {AlertifyService} from "../../../../services/alertifyService";
import {AnswerService} from "../../../../services/answerService";
import {Router} from "@angular/router";
import {Vote} from "../../../../model/vote.model";
import {VoteService} from "../../../../services/voteService";

@Component({
  selector: 'app-answer-component',
  templateUrl: 'answer.component.html',
  styleUrls: ['answer-component.scss'],
  providers: [AnswerService, VoteService]
})

export class AnswerComponent {
  @Input() answer!:Answer
  @ViewChild('input') inputElement!:ElementRef

  private edit: boolean = false

  vote:number = 0

  constructor(private voteService:VoteService, private alertifyService:AlertifyService, private answerService: AnswerService, private router:Router) {
  }

  ngOnInit() {
    if(localStorage['username'] && this.answer != undefined) {
      let voteDTO: Vote = {username:localStorage['username'], score: undefined, questionId: undefined, answerId: this.answer.id}
      this.voteService.getVote(voteDTO).subscribe(res => {
        if(res.score != undefined)
          this.vote = res.score
      })
    }
  }

  enableDelete(): boolean{
    const answerOwner = this.answer.username;
    const currentUser = localStorage['username']
    if(!localStorage['userRole'])
      return false
    const role: Role = JSON.parse(localStorage['userRole'])
    return answerOwner == currentUser || role.name == 'moderator'
  }

  delete() {
    this.alertifyService.confirm('Do you want to delete this answer?', () => {
      this.answerService.deleteAnswer(this.answer.id).subscribe(res => {
        if(res == 'Answer deleted') {
          this.alertifyService.success(res);
          let currentUrl = this. router. url
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([currentUrl])
        } else {
          this.alertifyService.warning(res)
        }
      })
    })
  }

  save() {
    const newAnswer: string = this.inputElement.nativeElement.value
    if(newAnswer == this.answer.answerBody) {
      this.alertifyService.warning('The answer is the same')
      this.edit = false
    } else {
      this.answer.answerBody = newAnswer
      this.answerService.updateAnswer(this.answer).subscribe(res => {
        this.answer = res;
        this.alertifyService.success('Answer edited')
        this.edit = false
      })
    }
  }

  enableEdit() {
    this.edit = true
  }

  editEnable(): boolean {
    return this.edit
  }

  upVote() {
    if (localStorage['username'] && this.answer.username != localStorage['username']) {
      let voteDTO: Vote = {
        username: localStorage['username'],
        score: undefined,
        questionId: undefined,
        answerId: this.answer.id
      }
      switch (this.vote) {
        case 0:
          voteDTO.score = 1
          this.addVote(voteDTO)
          break
        case 1:
          this.deleteVote(voteDTO)
          break
        case -1:
          voteDTO.score = 1
          this.changeVote(voteDTO)
      }
    }
  }

  downVote() {
    if (localStorage['username'] && this.answer.username != localStorage['username']) {
      let voteDTO: Vote = {
        username: localStorage['username'],
        score: undefined,
        questionId: undefined,
        answerId: this.answer.id
      }
      switch (this.vote) {
        case 0:
          voteDTO.score = -1
          this.addVote(voteDTO)
          break
        case 1:
          voteDTO.score = -1
          this.changeVote(voteDTO)
          //change
          break
        case -1:
          this.deleteVote(voteDTO)
          break
      }
    }
  }

  addVote(voteDTO:Vote) {
    this.voteService.vote(voteDTO).subscribe(r => {
      this.alertifyService.success('Vote registered')
      if(r.score != undefined)
        this.vote = r.score
      let currentUrl = this. router. url
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl])
    })
  }

  changeVote(voteDTO:Vote) {
    this.voteService.changeVote(voteDTO).subscribe((r) => {
      this.alertifyService.success('Vote changed')
      if(r.score != undefined)
        this.vote = r.score
      let currentUrl = this. router. url
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl])
    })
  }

  deleteVote(voteDTO:Vote){
    this.voteService.deleteVote(voteDTO).subscribe(() => {
      this.alertifyService.success('Vote deleted')
      this.vote = 0
      let currentUrl = this. router. url
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl])
    })
  }

}
