import { Component, OnInit } from '@angular/core';

import { OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable, Subscription, of } from "rxjs";

@Component({
  selector: 'app-questions',
  templateUrl: 'questions.component.html',
  styleUrls:['questions.component.css']
})

export class QuestionsComponent  {
  newQuestionForm: FormGroup;
  choicesArray: FormArray;

  private subscription: Subscription | undefined;

  constructor(private formBuilder: FormBuilder) {
    this.newQuestionForm = formBuilder.group({
      'question': ['', Validators.compose([Validators.required])],
      'choices': formBuilder.array([
        ['a. '] // default value, sync validators, async validators
      ]),
      'answer': ['', Validators.required],
    });
    this.choicesArray = this.newQuestionForm.get('choices') as FormArray;

    this.subscription = this.newQuestionForm?.get('question')?.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
  }

  onAddChoice() {
    (<FormArray>this.newQuestionForm.controls['choices']).push(new FormControl(''));
  }

  onSubmit() {
    console.log(this.newQuestionForm.value);
  }
  
  

}
