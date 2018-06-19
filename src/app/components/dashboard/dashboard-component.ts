import { Component, OnInit, DoCheck, AfterViewInit, OnChanges, ViewChild, ElementRef,Renderer2, Output, EventEmitter } from '@angular/core';
import { Interviewcreate } from '../../shared/interview-create';
import { Interview } from '../../shared/interview';
import { DataService } from '../../data-service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard-component.html',
  styleUrls: [ './dashboard-component.css' ]
})
export class DashboardComponent implements OnInit  {
  users: Interviewcreate;
  data;

  constructor(private el: ElementRef, private sharedService:SharedService) { 
    
  }
  
  ngOnInit(){

  }
  deletePhone(e) {
    console.log(e)
  }
  checkanswer(qno) {
    switch (qno) {
      case "q1":
        this.data = this.el.nativeElement.querySelector('.dotted-box').textContent.toLowerCase().trim();
        this.sharedService.changeMessage(this.data)
        //this.inputToChild.emit('alert')
      break;
      default:
      confirm("Sorry, that color is not in the system yet!");
    }

  }
}