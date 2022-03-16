import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { questionObj } from '../../post.model';
import { QuestionService } from '../../shared/question.service';
import { environment } from '../../../environments/environment';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  questions : questionObj[]= []
  question : questionObj= { id:'',
    question:'',
    ca:'',
    cb:'',
    cc:'',
    cd:'',
    ans:''};

  resExtract:any;

  subcriptions: Subscription[]=[];

  constructor (public quesService:QuestionService,
    public http:HttpClient){
    
  }

  ngOnInit(): void {
    //  this.questions=this.quesService.getPosts();
    //populate from backend
    this.subcriptions[0] = this.http.get(environment.apiBaseUrl+'/qa')
    .subscribe((response) => {
      console.log(response);
      this.resExtract = response;
      for (let ext of this.resExtract) {
        console.log(ext); 
        console.log(ext.question);
        this.question.id = ext._id;
        this.question.question = ext.question;
        this.question.ca = ext.ca;
        this.question.cb = ext.cb;
        this.question.cc = ext.cc;
        this.question.cd = ext.cd;
        this.question.ans = ext.answer;
        this.quesService.addPost(this.question)
        this.questions.push(this.question)
      }
    },
      (error) => { console.log(error); });
  }

  deleteQuestion(deletQ:questionObj){
    this.RemoveElementFromStringArray(deletQ);
    //delete from backend too
    this.http.delete(environment.apiBaseUrl+'/qa/'+deletQ.id)
     .subscribe(res => console.log(res))

  }

   RemoveElementFromStringArray(element: questionObj) {
    this.questions.forEach((value,index)=>{
         if(value==element) this.questions.splice(index,1);
     });

  }

  ngOnDestroy(): void {
    for (let sub of this.subcriptions)  
    {
      sub.unsubscribe()
    }
  }

}
