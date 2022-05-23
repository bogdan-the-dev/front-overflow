import {Component, ElementRef, Input, ViewChild} from "@angular/core";
import {Question} from "../../../../model/question.model";
import {Router} from "@angular/router";
import {QuestionService} from "../../../../services/questionService";
import {Role} from "../../../../model/role.model";
import {AlertifyService} from "../../../../services/alertifyService";
import {VoteService} from "../../../../services/voteService";
import {Vote} from "../../../../model/vote.model";

@Component({
  selector: 'app-question-component',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  providers: [QuestionService, VoteService]
})

export class QuestionComponent{
  @Input() question!: Question

  @ViewChild('title') titleElement!: ElementRef
  @ViewChild('body') bodyElement!: ElementRef
  @ViewChild('tag') tagElement!: ElementRef

  edit: boolean = false

  vote: number = 0

  constructor(private voteService: VoteService, private router:Router, private questionService: QuestionService, private alertifyService: AlertifyService) {
  }

  ngOnInit() {
    if (localStorage['username'] && this.question != undefined) {
      let voteDTO: Vote = {username: localStorage['username'], score: undefined, questionId: this.question.questionId, answerId: undefined}
      this.voteService.getVote(voteDTO).subscribe(res => {
        if(res.score != undefined)
          this.vote = res.score
        else
          this.vote = 0
      })
    }
  }


  upVote() {
    if (localStorage['username'] && this.question.username != localStorage['username']) {
      let voteDTO: Vote = {
        username: localStorage['username'],
        score: undefined,
        questionId: this.question.questionId,
        answerId: undefined
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
      if (localStorage['username'] && this.question.username != localStorage['username']) {
        let voteDTO: Vote = {
          username: localStorage['username'],
          score: undefined,
          questionId: this.question.questionId,
          answerId: undefined
        }
        switch (this.vote) {
          case 0:
            voteDTO.score = -1
            this.addVote(voteDTO)
            break
          case 1:
            voteDTO.score = -1
            this.changeVote(voteDTO)
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

    deleteVote(voteDTO: Vote) {
      this.voteService.deleteVote(voteDTO).subscribe(() => {
        this.alertifyService.success('Vote deleted')
        this.vote = 0
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

    changeTag() {
      const tag: string = this.tagElement.nativeElement.value
      if (tag != '') {
        if (this.question.tags.includes(tag)) {
          this.question.tags = this.question.tags.filter(t => t != tag)
        } else {
          this.question.tags.push(tag);
        }
        this.tagElement.nativeElement.value = ''
      }
    }

  redirectToQuestionPage() {
    this.router.navigate(['questions', 'question', this.question.questionId])
  }

  powerUser(): boolean {
    if(!localStorage['userRole'])
      return false
    const role: Role = JSON.parse(localStorage['userRole'])
    return role.name == 'moderator' || this.question.username == localStorage['username']
  }

  toggleEdit() {
    this.edit = !this.edit
  }

  deleteQuestion() {
    this.alertifyService.confirm('Do you want to delete the question?', () => {
      this.questionService.deleteQuestion(this.question.questionId).subscribe(res => {
        if(res == 'Something went wrong') {
          this.alertifyService.error(res)
        } else {
          this.alertifyService.success(res)
          this.router.navigate(['/questions'])
        }
      })
    })
  }

  saveQuestion() {
    const newTitle: string = this.titleElement.nativeElement.value
    const newBody: string = this.bodyElement.nativeElement.value

      this.question.title = newTitle
      this.question.text = newBody
      this.questionService.updateQuestion(this.question).subscribe(res => {
        if(res == undefined) {

        } else {
          this.alertifyService.success('Question updated')
          this.question = res
          this.edit = false
        }
      })
    }
}
