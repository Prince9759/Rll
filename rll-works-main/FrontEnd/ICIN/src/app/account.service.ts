import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl:string="http://localhost:9098"
  constructor(public http:HttpClient) { }
  storeAccount(account:any):Observable<string>
  {
    return this.http.post(this.baseUrl+"/storeAccount",account,{responseType:"text"});
  }

  updateAccount(account:any):Observable<string>
  {
    return this.http.patch(this.baseUrl+"/updateAccount",account,{responseType:"text"});
  }
  findAllAccount():Observable<Account[]>
  {
    return this.http.get<Account[]>(this.baseUrl+"/findAllAccount");
  }

  findAllAccountById(aid:number):Observable<string>
  {
    return this.http.get(this.baseUrl+"/findAccountByaid/"+aid,{responseType:"text"});
  }

  deleteAccountById(aid:number):Observable<string>
  {
    return this.http.delete(this.baseUrl+"/deleteAccountByuid/"+aid,{responseType:"text"});
  }


}

