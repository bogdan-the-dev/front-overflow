import {Tag} from "./tag.model";
import {Answer} from "./answer.model";

export interface Question {

  questionId: bigint
  title: String
  text: String
  creationDate: Date
  upVotes: bigint
  downVotes: bigint
  username: String
  userScore: bigint
  tags: Tag[]
  answers?: Answer[]


}
