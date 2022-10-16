import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-saving',
  templateUrl: './saving.component.html',
  styleUrls: ['./saving.component.css']
})
export class SavingComponent implements OnInit {

  constructor(public as:AccountService) { }

  ngOnInit(): void {
  }

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
               this.x=this.data.includes("saving")
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
 
 
 
 
