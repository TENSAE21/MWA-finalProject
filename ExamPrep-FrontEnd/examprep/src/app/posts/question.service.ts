import { Injectable } from '@angular/core';
import { questionObj } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
questions:questionObj[]=[];

getPosts(){
  return this.questions;
}

addPost(myQ:questionObj){
   const quez:questionObj=myQ;
   this.questions.push(quez);
}

}
