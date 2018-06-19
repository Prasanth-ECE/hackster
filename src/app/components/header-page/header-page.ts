import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { DataService } from '../../data-service';
import { Router } from '@angular/router';



@Component({
  selector: 'header-page',
  templateUrl: './header-page.html',
  styleUrls: [ './header-page.css' ]
})
export class HeaderPage implements OnInit, DoCheck {
  adminaccess = false;
  logggin = false;
  constructor(private service: DataService,
  private router: Router){

  }

  logout(){
    console.log('You are logged out')
    this.service.logout();
    this.router.navigate(['/login'])
  }
  logincheck(){
    if(this.service.loggedIn()){
      this.logggin = true;
    }
    else {this.logggin = false;}
    if(this.service.adminaccess()){
      this.adminaccess = true;
    }
    else{this.adminaccess = false;}
  }
  ngDoCheck(){
    this.logincheck();
  }
  ngOnInit(){
    //this.logincheck();
  }
}
