import {Role} from "./role.model";

export interface User {

  id: String
  username: String
  email: String
  accountVerified: boolean
  accountBanned: boolean
  accountBlocked: boolean
  score: bigint
  twoFactorAuthentication: boolean
  role: Role
}
