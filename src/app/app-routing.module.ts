import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./content/pages/home/home.component";
import {QuestionsPageComponent} from "./content/pages/questions/questions-page.component";
import {QuestionComponent} from "./content/components/question/question.component";
import {QuestionPageComponent} from "./content/pages/question/question-page-component";
import {UsersPageComponent} from "./content/pages/users/users.page.component";
import {UserPageComponent} from "./content/pages/user/user.page.component";
import {AboutPageComponent} from "./content/pages/about/about.page.component";
import {LoginPageComponent} from "./content/pages/login/login.page.component";
import {RegisterPageComponent} from "./content/pages/register/register.page.component";
import {TagsPageComponent} from "./content/pages/tags/tags.page.component";
import {TagQuestionsPageComponent} from "./content/pages/questions-by-tag/tag.questions.page.component";
import {AddQuestionPageComponent} from "./content/pages/add-question/add-question.page.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'questions', component: QuestionsPageComponent},
  {path: 'questions/question/:id', component: QuestionPageComponent},
  {path: 'users', component: UsersPageComponent},
  {path: 'users/user/:username', component: UserPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'tags', component: TagsPageComponent},
  {path: 'tags/questions/:tag', component:TagQuestionsPageComponent},
  {path: 'questions/add-question', component: AddQuestionPageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
