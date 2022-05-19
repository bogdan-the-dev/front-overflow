import {Role} from "./role.model";

export interface User {

  id: string
  username: string
  email: string
  accountVerified: boolean
  accountBanned: boolean
  accountBlocked: boolean
  score: number
  twoFactorAuthentication: boolean
  role: Role
}
