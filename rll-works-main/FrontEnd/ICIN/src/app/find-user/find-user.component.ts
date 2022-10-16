import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css']
})
export class FindUserComponent implements OnInit {
  constructor(public us:AccountService, public login:LoginService) { }
 
  ngOnInit(
  ): void {
    this.findAllAccount()
  }
  
  findAllAccount()
  {
    this.us.findAllAccount().subscribe({
      next:(result:any)=>this.accounts=result,

      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")

    })
  }
accounts:Array<Account>=[];
}