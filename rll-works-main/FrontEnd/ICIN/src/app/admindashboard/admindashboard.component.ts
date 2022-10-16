import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(public route:Router,public as:AccountService) { }

  ngOnInit(): void {
    this.findAllAccount();
  }
  accounts:Array<Account>=[];
  signup()
  {
    this.route.navigate(['SignUp']);
    
  }
  findAllAccount()
  {
    this.as.findAllAccount().subscribe({
      next:(result:any)=>this.accounts=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")


    })
  }
     deleteAccount(aid:number)
     {
      // console.log("fnjked");
      // this.as.deleteAccountById(aid).subscribe({
      //   next:(result:any)=>this.accounts=result,
      //   error:(error:any)=>console.log(error),
      //   complete:()=>{this.findAllAccount();}
  
  
      // });
      this.as.deleteAccountById(aid).subscribe({
        next:(result:any)=>this.accounts=result,
      })
      console.log("fendkj");

     }

}
