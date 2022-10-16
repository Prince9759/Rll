import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { FindUserComponent } from './find-user/find-user.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { PrimaryComponent } from './primary/primary.component';
import { SavingComponent } from './saving/saving.component';
import { ChequeComponent } from './cheque/cheque.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdmindashboardComponent,
    SignupComponent,
    UserdashboardComponent,
    FindUserComponent,
    DepositComponent,
    WithdrawComponent,
    PrimaryComponent,
    SavingComponent,
    ChequeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
