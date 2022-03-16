import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  userDetails:any;

  subcriptions: Subscription[]=[];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.subcriptions[0] = this.userService.getUserProfile().subscribe(
      res => {
        //this.userDetails = res['user'];
      },
      err => { 
        console.log(err); 
      }
    );
  }

  ngOnDestroy(): void {
    for (let sub of this.subcriptions)  
    {
      sub.unsubscribe()
    }
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}
