import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TagService} from "./tagService";
import {Tag} from "../model/tag.model";


describe('test module for tag service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TagService]
    })
  })

  it('i should be able to instantiate tag service', () => {
    expect(TestBed.get(TagService)).toBeTruthy()
  })

  it('i should have a number of tags greater than 0', () => {
    const service:TagService = TestBed.get(TagService)
    let tags: Tag[] = []
    service.getAllTags().subscribe(result => {
      tags = result
      expect(tags.length > 0).toBeTrue()
    })
  })

})
