import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { ShowQuestionComponent } from './show-question/show-question.component';


import { AppRoutingModule} from './app-routing.module';
import { PostsModule } from './posts/posts.module';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    ShowQuestionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    PostsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


