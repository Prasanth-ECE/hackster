import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from "rxjs";
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { UserModel } from './shared/user-model';
import { UserInput } from './shared/user-input';

@Injectable()
export class DataService {
  authToken;
  user;
  options;
  private answercheck = new BehaviorSubject<string>("default message");
  currentMessage = this.answercheck.asObservable();

  changeAnswer(message: string) {
    this.answercheck.next(message)
  }


  constructor(private http: HttpClient) { }

  login(user:UserInput): Observable<UserModel> {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<UserModel>('http://localhost:3000/user/login', user, {headers:headers})
  }
  storeUserData(token, user, admin) {
    console.log(admin)
    localStorage.setItem('token', token);
    localStorage.setItem('user', user);
    localStorage.setItem('admin', JSON.stringify(admin));
    this.authToken = token;
    this.user = user;
  }
  
  loadToken() {
    this.authToken = localStorage.getItem('token');
  }
 
  logout() {
    this.authToken = localStorage.removeItem('token');
    this.user = localStorage.removeItem('user');
    localStorage.removeItem('admin');
    localStorage.clear()
  }
  loggedIn() {
   return tokenNotExpired();
  }
  adminaccess(){
    const adminvalue = localStorage.getItem('admin')
    let log= console.log;
    //log(adminvalue)
    if(adminvalue === "undefined"){
      return false
    }
    else {
      return true
    }
  }

}