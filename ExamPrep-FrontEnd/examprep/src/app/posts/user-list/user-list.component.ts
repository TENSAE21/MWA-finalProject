import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userObj } from '../user.model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  displayedColumns: string[] = [ 'name', 'email', 'role'];
  

  resExtract:any;
  users : userObj[]= []
  user : userObj= { 
    fullName:'',
    role:'',
    email:''
  };
  dataSource! : any;

  constructor (public http:HttpClient){
    
  }

  ngOnInit(): void {
    //  this.questions=this.quesService.getPosts();
    //populate from backend
    this.http.get('http://localhost:3000/api/user')
    .subscribe((response) => {
      console.log(response);
      this.resExtract = response;
      for (let i = 0; i < this.resExtract.length; i++) {
        //console.log(this.resExtract); 
        console.log(this.resExtract[i].fullName);
        this.user.fullName = this.resExtract[i].fullName;
        this.user.email = this.resExtract[i].email;
        this.user.role = this.resExtract[i].role;
        this.users.push(this.user)
      }
     this.dataSource = this.users;

    },
      (error) => { console.log(error); });
  }

}
