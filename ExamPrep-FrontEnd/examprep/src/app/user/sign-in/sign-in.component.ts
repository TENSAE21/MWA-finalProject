import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {

  constructor(private userService: UserService,private router : Router) { }

  model ={
    email :'',
    password:''
  };
  resExtract: any;

  subcriptions: Subscription[]=[];

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages ?: string;
  ngOnInit() {
    if(this.userService.isLoggedIn())
    {
      if(this.userService.isAdmin())
        this.router.navigateByUrl("/list");
      else
        this.router.navigateByUrl("/questions");
    }
    else
        this.router.navigateByUrl('/login');
  }

  onSubmit(form : NgForm){
    this.subcriptions[0] = this.userService.login(form.value).subscribe(
      res => {
        this.resExtract = res;
        this.userService.setToken(this.resExtract['token']);
        if(this.userService.isAdmin())
          this.router.navigateByUrl("/list");
        else
          this.router.navigateByUrl("/questions");
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

  ngOnDestroy(): void {
    for (let sub of this.subcriptions)  
    {
      sub.unsubscribe()
    }
  }


}
