import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FindUserComponent } from '../find-user/find-user.component';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  profile(){
this.router.navigate(['find-user'])
  }
  deposit(){
    this.router.navigate(['Deposit'])

  }
  withdraw(){
    this.router.navigate(['Withdraw'])

  }
  Primary(){
    this.router.navigate(['Primary'])
  }
  saving()
  {
    this.router.navigate(['saving'])
  }
  check()
  {
    this.router.navigate(['cheque']);
  }


}
