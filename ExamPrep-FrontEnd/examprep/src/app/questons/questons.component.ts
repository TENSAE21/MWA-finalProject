import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuestionService } from '../shared/question.service';
import { HttpClient } from '@angular/common/http';
import { questionObj } from '../post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-questons',
  templateUrl: './questons.component.html',
  styleUrls: ['./questons.component.css']
})
export class QuestonsComponent implements OnInit, OnDestroy {

  questionNumber : number = 0;

  currQuestion: String = '';
  currCA: String = '';
  currCB: String = '';
  currCC: String = '';
  currCD: String = '';

  questions : questionObj[]= []
  question : questionObj= { 
    id:'',
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
    this.subcriptions[0] = this.http.get('http://localhost:3000/api/qa')
    .subscribe((response) => {
      console.log(response);
      this.resExtract = response;
      for (let ext of this.resExtract) {
        console.log(ext); 
        console.log(ext.question);
        this.question.id= ext._id;
        this.question.question = ext.question;
        this.question.ca = ext.ca;
        this.question.cb = ext.cb;
        this.question.cc = ext.cc;
        this.question.cd = ext.cd;
        this.question.ans = ext.answer;
        this.quesService.addPost(this.question)
        this.questions.push(this.question)
      }
      this.nextQuestion()
    },
      (error) => { console.log(error); });
  }

  nextQuestion()
  {
    if((this.questionNumber) < (this.questions.length)){
      console.log(this.questions[this.questionNumber].question)

     this.currQuestion = this.questions[(this.questionNumber)].question;
     this.currCA = this.questions[this.questionNumber].ca;
     this.currCB = this.questions[this.questionNumber].cb;
     this.currCC = this.questions[this.questionNumber].cc;
     this.currCD = this.questions[this.questionNumber].cd;
     this.questionNumber++
    }
    else{
      this.questionNumber = 0;
      this.currQuestion = this.questions[(this.questionNumber)].question;
      this.currCA = this.questions[this.questionNumber].ca;
      this.currCB = this.questions[this.questionNumber].cb;
      this.currCC = this.questions[this.questionNumber].cc;
      this.currCD = this.questions[this.questionNumber].cd;
      this.questionNumber++
    }
    console.log(this.questionNumber)
    console.log(this.questions[(this.questionNumber)])
  }

  ngOnDestroy(): void {
    for (let sub of this.subcriptions)  
    {
      sub.unsubscribe()
    }
  }

}
