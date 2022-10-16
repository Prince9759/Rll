import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginRef =new FormGroup({
  emailid:new FormControl(),
  password:new FormControl(),
  role:new FormControl()

 });
 msg:String="";
 check: string="";  



  constructor(public ls:LoginService,public router:Router) { }

  ngOnInit(): void {
  }



   signIn()
   {
    let login = this.loginRef.value;
    this.ls.signIn(login).subscribe({
      next:(result:any)=>{
        if(result=="Admin SuccessFully Login")
        {
          sessionStorage.setItem("userDetails",login.emailid);
            this.router.navigate(["AdminDashboard"])
        }
        else if(result=="User Successfully Login")
        {
          sessionStorage.setItem("userDetails",login.emailid);
          this.router.navigate(["UserDashboard"]);


        }
        else
        {
                this.msg=result;
                
        }
      },
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
   }
}