import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavigationBarComponent} from "./content/shared/navigation-bar/navigation-bar.component";
import {HomeComponent} from "./content/pages/home/home.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {TagsComponent} from "./content/components/tags/tags.component";
import {QuestionComponent} from "./content/components/question/question.component";
import {HttpClientModule} from "@angular/common/http";
import {QuestionsPageComponent} from "./content/pages/questions/questions-page.component";
import {AnswerComponent} from "./content/components/answer/answer.component";
import {QuestionPageComponent} from "./content/pages/question/question-page-component";
import {UserComponent} from "./content/components/user/user.component";
import {UsersPageComponent} from "./content/pages/users/users.page.component";
import {UserPageComponent} from "./content/pages/user/user.page.component";
import {AboutPageComponent} from "./content/pages/about/about.page.component";
import {LoginPageComponent} from "./content/pages/login/login.page.component";
import {RegisterPageComponent} from "./content/pages/register/register.page.component";
import {TagsPageComponent} from "./content/pages/tags/tags.page.component";
import {TagQuestionsPageComponent} from "./content/pages/questions-by-tag/tag.questions.page.component";
import {AddQuestionPageComponent} from "./content/pages/add-question/add-question.page.component";


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    TagsComponent,
    QuestionComponent,
    QuestionsPageComponent,
    AnswerComponent,
    QuestionPageComponent,
    UserComponent,
    UsersPageComponent,
    UserPageComponent,
    AboutPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    TagsComponent,
    TagsPageComponent,
    TagQuestionsPageComponent,
    AddQuestionPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
