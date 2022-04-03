export class Vote {

  username: String
  score: bigint
  answerId: bigint

  constructor(username: String, score: bigint, answerId: bigint) {
    this.username = username;
    this.score = score;
    this.answerId = answerId;
  }
}
