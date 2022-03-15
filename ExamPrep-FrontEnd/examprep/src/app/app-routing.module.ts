import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { ShowQuestionComponent } from './show-question/show-question.component';


const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'show-question', component: ShowQuestionComponent },
    { path: 'list', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)},
    { path: '**', redirectTo: '/' }
  ];


@NgModule({
  imports: [CommonModule,
    BrowserAnimationsModule,
      RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 