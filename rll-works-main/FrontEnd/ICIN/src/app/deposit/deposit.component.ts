import { Component, OnInit, NgModule, Input} from '@angular/core';
import { NgModel } from '@angular/forms';
import { Account } from '../account';
import { AccountService } from '../account.service';
@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
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
depositedamount:number=0;
aid:number=0;


updateAccount(account:any)
     {


        this.aid=account.aid;
        this.abalance=account.abalance + this.depositedamount;
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
       account = {abalance:this.accounts[i].abalance+this.depositedamount, aid:this.aid, uname:this.accounts[i].uname, uemailid:this.accounts[i].uemailid, anumber:this.accounts[i].anumber, atype:this.accounts[i].atype, password:this.accounts[i].password};

      
    }
    
  }


      this.as.updateAccount(account).subscribe({
        next:(result:any)=>this.accounts=result,
        error:(error:any)=>console.log(error),
        complete:()=>{this.findAllAccount();}
      })

}}