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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  myForm: FormGroup;
  
  private subscription: Subscription | undefined;
  constructor(private formBuilder: FormBuilder) {
    
    this.myForm = formBuilder.group({
      'username': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.required],
     
    });

    this.subscription = this.myForm?.get('username')?.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
  }

  onAddHobby() {
    (<FormArray>this.myForm.controls['hobbies']).push(new FormControl(''));
  }

  onSubmit() {
    console.log(this.myForm.value);
  }

  notAsaadValidator(control: FormControl): { [s: string]: boolean } | null {
    if (control.value === 'asaadsaad') {
      return { example: true };
    }
    return null;
  }

  // asyncValidator(control: FormControl): Promise<any> | Observable<any> {
  //   if (control.value === 'asaadsaad') {
  //     return of({ example: true });
  //   }
  //   return of(null);
  // }
  
    asyncValidator(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        // this.myForm.get().disable()   fail;
        if (control.value === 'asaadsaad') resolve({ example: true }) // invalid
        resolve(null) // valid
      }, 5000);
    })
  }


  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

}
