import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthGuard } from '../../guards/auth.guard';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { DataService } from '../../data-service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.html',
  styleUrls: [ './login-page.css' ]
})
export class LoginPage implements OnInit {
  loginform: FormGroup;
  titleAlert:string;
  messageClass;
  message;
  previousUrl;
  adminboard:Boolean = false;
  username;

@HostListener('window:beforeunload', ['$event'])
handleBeforeUnload(event) {

    return "You have unsaved data changes. Are you sure to close the page?"

}

  constructor(private fb: FormBuilder, private service: DataService, private authGuard: AuthGuard,
  private router: Router, private http: HttpClient){
    this.loginform = this.fb.group({
     'name': [null, Validators.required],
     'password': ['', Validators.required],
      });
  }

 ngOnInit()  {
  if (this.authGuard.redirectUrl) {
      this.messageClass = 'alert alert-danger';
      this.message = 'You must be logged in to view that page.';
      this.previousUrl = this.authGuard.redirectUrl;
      this.authGuard.redirectUrl = undefined;
    } 
 }
  login(){
    const url = 'http://localhost:3000/user/login';
    const user = {
      "email" : this.loginform.get('name').value,
      "password" : this.loginform.get('password').value
    }
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    
   //this.http.post(url, user, {headers: headers})
    this.service.login(user)
   .subscribe((data) => {
     console.log(data)
     if (!data.success) {
       this.messageClass = 'alert alert-danger';
     }
     else {
       this.messageClass = 'alert alert-success';
       this.service.storeUserData(data.token, data.user, data.admin);
       setTimeout(() => {
          console.log('Success');
          if (this.previousUrl) {
            this.router.navigate([this.previousUrl]); // Redirect to page they were trying to view before
          } else {
            this.router.navigate(['/dashboard']); // Navigate to dashboard view
          }
        }, 1000)
     }
   })
  }
  getprofile(){
    this.username = localStorage.getItem('user').split('@')[0]
  }
}
