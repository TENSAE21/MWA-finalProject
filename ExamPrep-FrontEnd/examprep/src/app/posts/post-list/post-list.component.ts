import { Component, OnInit } from '@angular/core';
import { questionObj } from '../post.model';
import { QuestionService } from '../question.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {




  questions : questionObj[]=[]
  constructor(public quesService:QuestionService){
    
  }

  ngOnInit(): void {
    this.questions=this.quesService.getPosts();
  }

  deleteQuestion(deletQ:questionObj){
    this.RemoveElementFromStringArray(deletQ);
  }

   RemoveElementFromStringArray(element: questionObj) {
    this.questions.forEach((value,index)=>{
         if(value==element) this.questions.splice(index,1);
     });

  }



}
