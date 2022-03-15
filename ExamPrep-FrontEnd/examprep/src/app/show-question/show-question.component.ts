import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-question',
  templateUrl: 'show-question.component.html',
  styleUrls: ['./show-question.component.css']
})
export class ShowQuestionComponent implements OnInit {

  question:String = '';
  choices: String[] = [];

  constructor() {
      //make Get request to backend

      this.question = 'why is js so fast'
      this.choices.push('a.built on v8')
      this.choices.push('b. compiles down to c++ ')

   }

  ngOnInit(): void {
  }

}
