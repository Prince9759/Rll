import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  constructor(public as: AccountService) { }
  ngOnInit(): void {
    this.findAllAccount();
  }
  accounts:Array<Account>=[];
abalance:number=0;
uname:String="";
  uemailid:string="";
  anumber:number=0;
  atype:string="";
  password:number=0;


  index:number=0; 
withdrawedamount:number=0;
aid:number=0;


updateAccount(account:any)
     {


        this.aid=account.aid;
        this.abalance=account.abalance - this.withdrawedamount;
        this.uname=account.uname;
        this.uemailid=account.uemailid;
        this.anumber=account.anumber;
        this.atype=account.atype;
        this.password=account.password;

      }
   
     findAllAccount()
  {
    this.as.findAllAccount().subscribe({
      next:(result:any)=>this.accounts=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
    console.log(this.accounts[0].uname);

  }
updateDataFromDb(){
  console.log(this.accounts[0].uname);
  let account;
  for (let i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].aid==this.aid) {
      if (this.accounts[i].abalance<this.withdrawedamount) {
        alert("Your Balance is low");
      } else {
        account = {abalance:this.accounts[i].abalance-this.withdrawedamount, aid:this.aid, uname:this.accounts[i].uname, uemailid:this.accounts[i].uemailid, anumber:this.accounts[i].anumber, atype:this.accounts[i].atype, password:this.accounts[i].password};

      }

      
    }
    
  }


      this.as.updateAccount(account).subscribe({
        next:(result:any)=>this.accounts=result,
        error:(error:any)=>console.log(error),
        complete:()=>{this.findAllAccount();}
      })

}}



