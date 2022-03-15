import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { QuestionsComponent } from './questions/questions.component';
import { ShowQuestionComponent } from './show-question/show-question.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    ShowQuestionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'questions', component: QuestionsComponent },
      { path: 'show', component: ShowQuestionComponent }
      // { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


