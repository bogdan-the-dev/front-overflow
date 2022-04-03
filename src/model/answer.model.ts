export class Answer {
  id: bigint
  username: String
  body: String
  date: Date
  edited: boolean
  upVotes: bigint
  downVotes: bigint
  questionId: bigint
  userScore: bigint

  constructor(id: bigint, username: String, body: String, date: Date, edited: boolean, upVotes: bigint, downVotes: bigint, questionId: bigint, userScore: bigint) {
    this.id = id;
    this.username = username;
    this.body = body;
    this.date = date;
    this.edited = edited;
    this.upVotes = upVotes;
    this.downVotes = downVotes;
    this.questionId = questionId;
    this.userScore = userScore;
  }
}
