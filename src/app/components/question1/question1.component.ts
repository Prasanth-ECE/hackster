import { Component, OnInit, ViewChild, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../data-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {
  @ViewChild('answerbox') div:ElementRef;
  @ViewChild('htmlToAdd') htmlToAdd:ElementRef;
  @ViewChild('questionbox') questionbox:ElementRef;
  
  question1 = ['<p>', '</p>', 'Polar bears live in the north pole' ]
  questionboxvalue = [];
  @Output() someEvent = new EventEmitter<string>();
  
  constructor(private service: DataService,
    private router: Router,
    private http:HttpClient,
    private renderer: Renderer2,
    private el:ElementRef
  ){
    }

  ngOnInit() {
  }
  onClick(event) {
    console.log(event);
  }
  getvalue(e){
    this.questionboxvalue.push({index: e.target.dataset.index, value: e.target.textContent.trim()})
    e.target.disabled = true;
    this.resultview();
  }
  getbvalue(event) {
    this.someEvent.next(event);
    Array.prototype.forEach.call(this.el.nativeElement.querySelectorAll('.shadowbutton'), (element, i)=>{
      if(element.dataset.index === event.target.dataset.index) {
          element.disabled = false;
          this.questionboxvalue = this.questionboxvalue.filter((val)=>{
            return val.index !== event.target.dataset.index;
          })
          this.resultview()
        }
    })
    
  }
  resultview() {
    setTimeout(()=>{
      this.div.nativeElement.innerHTML = this.htmlToAdd.nativeElement.textContent.trim();
    }, 100)
    
  }

}
