export interface Answer {
  id?: number
  username: String
  answerBody: String
  date: Date
  edited: boolean
  upVotes: number
  downVotes: number
  questionId?: number
  userScore?: number


}
