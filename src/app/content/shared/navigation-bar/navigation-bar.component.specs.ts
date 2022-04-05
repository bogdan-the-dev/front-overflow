import {NavigationBarComponent} from "./navigation-bar.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";


describe('Navigation Bar componen', () => {
  let component: NavigationBarComponent
  let fixture: ComponentFixture<NavigationBarComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({declarations:[NavigationBarComponent]}).compileComponents()
    fixture = TestBed.createComponent(NavigationBarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    component: HTMLElement = fixture.nativeElement.querySelector('nav')
    expect(component).toBeTruthy()
  })

  it('nav should be present', () => {
    const {debugElement} = fixture
    const navDiv = debugElement.query((By.css('nav')))
    expect(navDiv).toBeTruthy()
  })
})
