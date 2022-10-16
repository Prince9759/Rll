import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loginRef =new FormGroup({
    emailid:new FormControl(),
    address:new FormControl(),
    city:new FormControl(),
    dob:new FormControl(),
    gender:new FormControl(),
    mnumber:new FormControl(),
    name:new FormControl(),
    password:new FormControl(),
    role:new FormControl()  
   });
   msg:String="";
  constructor(public ls:LoginService, public router: Router) { }

  ngOnInit(): void {
  }
   signUp()
   {
          let login = this.loginRef.value;
          this.ls.signUp(login).subscribe({

            next:(result:any)=>this.msg=result,
            error:(error:any)=>this.msg=error,
            complete:()=>console.log("Completed")
          })
        this.router.navigate(['Login'])
   }
}