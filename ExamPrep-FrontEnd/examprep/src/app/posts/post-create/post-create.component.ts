import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { questionObj } from '../../post.model';
import { QuestionService } from '../../shared/question.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent  implements OnInit{
questions:questionObj[]=[]
 constructor(public quezServe:QuestionService){
 }
  ngOnInit(): void {
 
  }

onAddQuestion(q:NgForm){
  if(q.invalid){return;}

  const myQue:questionObj={
  id:'',
  question:q.value.question,
  ca:'A) '+q.value.ca,
  cb:'B) '+q.value.cb,
  cc:'c) '+q.value.cc,
  cd:'D) '+q.value.cd,
  ans:q.value.ans
  }
  this.quezServe.addPost(myQue);
  q.resetForm;
}

}

