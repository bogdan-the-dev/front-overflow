import {Tag} from "./tag.model";
import {Answer} from "./answer.model";

export class Question {

  questionId: bigint
  title: String
  text: String
  creationDate: Date
  upVotes: bigint
  downVotes: bigint
  username: String
  userScore: bigint
  tags: Array<Tag>
  answers: Array<Answer>

  constructor(questionId: bigint, title: String, text: String, creationDate: Date, upVotes: bigint, downVotes: bigint, username: String, userScore: bigint, tags: Array<Tag>, answers: Array<Answer>) {
    this.questionId = questionId;
    this.title = title;
    this.text = text;
    this.creationDate = creationDate;
    this.upVotes = upVotes;
    this.downVotes = downVotes;
    this.username = username;
    this.userScore = userScore;
    this.tags = tags;
    this.answers = answers;
  }

}
