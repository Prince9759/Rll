import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { FindUserComponent } from './find-user/find-user.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { PrimaryComponent } from './primary/primary.component';
import { SavingComponent } from './saving/saving.component';
import { ChequeComponent } from './cheque/cheque.component';


const routes: Routes = [
  {path:'Login',component: LoginComponent},
  {path:'SignUp',component: SignupComponent},
  {path:'UserDashboard',component:UserdashboardComponent},
  {path:'findAllAccount',component:FindUserComponent},
  {path:'find-user',component:FindUserComponent},
  {path:'AdminDashboard',component:AdmindashboardComponent},
  {path:'Deposit',component:DepositComponent},
  {path:'Withdraw',component:WithdrawComponent},
  {path:'Primary',component:PrimaryComponent},
  {path:'saving',component:SavingComponent},
  {path:'cheque',component:ChequeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
