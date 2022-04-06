import {UserService} from "./userService";
import {TestBed} from "@angular/core/testing";
import {User} from "../model/user.model";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('test module for user service', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]})
  })

  it('i should be able to create the service', () => {
    const service: UserService = TestBed.get(UserService)
    expect(service).toBeTruthy()
  })

  it('i should receive a number of users greater than 0', () => {
    const service:UserService = TestBed.get(UserService)
    let users: User[] = []
    service.getAllUsers().subscribe(result => {
      users = result
      expect(users.length > 0).toBeTrue()
    })

  })

})
