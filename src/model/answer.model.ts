export interface Answer {
  id: bigint
  username: String
  answerBody: String
  date: Date
  edited: boolean
  upVotes: bigint
  downVotes: bigint
  questionId: bigint
  userScore: bigint


}
