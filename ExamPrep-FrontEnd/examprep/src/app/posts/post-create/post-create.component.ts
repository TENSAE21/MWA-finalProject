import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { questionObj } from '../post.model';
import { QuestionService } from '../question.service';

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
    this.questions=[
      {question:'1) Which of the following is used to share data between controller and view in Angular?',CA:' A)using Model',CB:'B) using services',
        CC:'C) using factory',CD:' D) using $scope',Ans:'A'},
      {question:'2) Which of the following is used to share data between controller and view in Angular?',CA:' A)using Model',CB:'B) using services',
      CC:'C) using factory',CD:' D) using $scope',Ans:'A'},
      {question:'3) Which of the following is used to share data between controller and view in Angular?',CA:' A)using Model',CB:'B) using services',
      CC:'C) using factory',CD:' D) using $scope',Ans:'A'}];
      this.quezServe.addPost( this.questions[0]);
      this.quezServe.addPost( this.questions[1]);
      this.quezServe.addPost( this.questions[2]);
  }

onAddQuestion(q:NgForm){
  if(q.invalid){return;}

  const myQue:questionObj={
  question:q.value.question,
  CA:'A) '+q.value.CA,
  CB:'B) '+q.value.CB,
  CC:'c) '+q.value.CC,
  CD:'D) '+q.value.CD,
  Ans:q.value.Ans
  }
  this.quezServe.addPost(myQue);
  q.resetForm;
}

}
