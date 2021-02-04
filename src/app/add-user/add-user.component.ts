import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from '../user';
import {UserService} from '../user.service'
import { HttpHeaders } from '@angular/common/http';
import {apiUrl} from '../url/url';
import { Router } from '@angular/router';

class campaigns {
  firstname : any;
  lastname :any;
  email :any;
  mobile :any;
  role :any;
}

// interface Role {
//   value: string;
//   viewValue: string;
// }

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user = new User();
  msg = '';
  firstname : any;
  lastname :any;
  email :any;
  mobile :any;
  //  role: string[] = ['Admin', 'Normal User'];
  // role :any
  //  roles: Role[] = [
  //   {value: 'admin', viewValue: 'Admin'},
  //   {value: 'user', viewValue: 'Normal User'},
  // ];
  campaigns =new campaigns;

  selectedRole: string = '';

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedRole = event.target.value;
    console.log( "dsg"+this.selectedRole)
  }

  constructor(private _service : UserService ,private _router : Router) { }

  ngOnInit(): void {
  }

  User(){
    this.user.firstname =this.firstname;
    this.user.lastname =this.lastname;
    this.user.email =this.email;
    this.user.mobile =this.mobile;
    // this.user.role = this.role;
    // console.log("np_logrole=="+this.user.role)
    
    this._service.post(apiUrl.campaigns,this.user).subscribe(
      data =>{console.log("responce recieved") 
      this.msg ="User added Successfully"
     
    },
      error =>console.log("exception occured")
    )
  
   }
}
