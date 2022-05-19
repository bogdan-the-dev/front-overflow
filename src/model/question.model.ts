import {Answer} from "./answer.model";

export interface Question {

  questionId?: number
  title: string
  text: string
  creationDate: Date
  upVotes: number
  downVotes: number
  username: string
  userScore?: number
  tags: string[]
  answers?: Answer[]


}
