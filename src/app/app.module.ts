import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavigationBarComponent} from "./content/shared/navigation-bar/navigation-bar.component";
import {HomeComponent} from "./content/pages/home/home.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {TagComponent} from "./content/components/tag/tag.component";
import {QuestionComponent} from "./content/components/question/question.component";


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    TagComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    []
  ],
  providers: [],
  bootstrap: [ AppComponent, NavigationBarComponent]
})
export class AppModule { }
