import { Component, OnInit } from '@angular/core';
import { FormRecord } from '@angular/forms';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css']
})
export class PrimaryComponent implements OnInit {

  constructor(public as: AccountService) { }
  ngOnInit(): void {
    
  }
//   accounts:Array<Account>=[];
//   print:Array<Account>=[];


// abalance:number=0;
// uname:String="";
//   uemailid:string="";
//   anumber:number=0;
//   atype:string="";
//   password:number=0;


//   index:number=0; 
// depositedamount:number=0;
// aid:number=0;


// updateAccount(account:any)
//      {


//         this.aid=account.aid;
//         this.abalance=account.abalance;
//         this.uname=account.uname;
//         this.uemailid=account.uemailid;
//         this.anumber=account.anumber;
//         this.atype=account.atype;
//         this.password=account.password;

//       }
   
 //findAllAccount()
//   {
//     this.as.findAllAccount().subscribe({
//       next:(result:any)=>this.accounts=result,
//       error:(error:any)=>console.log(error),
//       complete:()=>console.log("completed")
//     })
//     console.log(this.accounts[0].uname);

//   }
// updateDataFromDb(){
//   console.log(this.accounts[0].uname);
//   let account;
//   for (let i = 0; i < this.accounts.length; i++) {
//     if (this.accounts[i].aid==this.aid) {
//       console.log(this.accounts[i].abalance);
//       this.print[i].abalance=this.accounts[i].abalance;

//       console.log(this.print.length);

//        account = {abalance:this.accounts[i].abalance, aid:this.aid, uname:this.accounts[i].uname, uemailid:this.accounts[i].uemailid, anumber:this.accounts[i].anumber, atype:this.accounts[i].atype, password:this.accounts[i].password};
//       this.print[i].abalance=this.accounts[i].abalance;
//       console.log(this.accounts[i].abalance);
//     }
    
//   }
//       this.as.updateAccount(account).subscribe({
//         next:(result:any)=>this.accounts=result,
//         error:(error:any)=>console.log(error),
//         complete:()=>{this.findAllAccount();}
//       })
//       console.log(this.accounts.length);
 accounts:Array<Account>=[];
 print:Array<String>=[];
aid:number=0;
m:number=0;
result:any;
x:boolean=false;
data:string="";
detail:string="";
findAllAccount()
  {
    this.as.findAllAccount().subscribe({
      next:(result:any)=>this.accounts=result,
       error:(error:any)=>console.log(error),
       complete:()=>console.log("completed")
    })

 }
      findUserByID(aid:number)
      {
       this.as.findAllAccountById(aid).subscribe({
         next:(result)=>this.check(result),
         error:(error:any)=>console.log(error),
         complete:()=>{this.findAllAccount();}
   
   
       })
      
       
       
      

             }

             check(result:string)
             {
              this.data=result;
              this.x=this.data.includes("current")
              if(this.x)
              {
                this.detail=result;
                
                 
                  
                  
              }
              else
              {
                this.detail="wrong account type";
              }
              
             
           
              

              

             }
            

}



