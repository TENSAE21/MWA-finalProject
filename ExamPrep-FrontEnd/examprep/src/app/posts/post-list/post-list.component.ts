import { HttpClient } from '@angular/common/http';
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
  constructor (public quesService:QuestionService,
    public http:HttpClient){
    
  }

  ngOnInit(): void {
    this.questions=this.quesService.getPosts();
    //populate from backend
    this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    .subscribe(res => console.log(res))

  }

  deleteQuestion(deletQ:questionObj){
    this.RemoveElementFromStringArray(deletQ);
    //delete from backend too
    // this.http.delete('https://jsonplaceholder.typicode.com/todos/1')
    // .subscribe(res => console.log(res))

  }

   RemoveElementFromStringArray(element: questionObj) {
    this.questions.forEach((value,index)=>{
         if(value==element) this.questions.splice(index,1);
     });

  }

}
