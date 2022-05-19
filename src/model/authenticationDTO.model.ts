import {Role} from "./role.model";

export interface AuthenticationDTO {
  userId: number
  username: string
  role: Role
  errorMessage: string
}
