import { Component, OnInit, Renderer2, ElementRef, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'footer-page',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {
  messageClass;
  @Output() answercheck = new EventEmitter<string>();

  constructor(private renderer: Renderer2, private el: ElementRef,
    private sharedService: SharedService  
  ) { 
    this.sharedService.currentMessage.subscribe((mess)=>{
      if(mess == '<p>polar bears live in the north pole</p>'){
        this.messageClass = 'alert alert-success'
      }
      else {
        this.messageClass = 'alert alert-danger'
      }
    })
  }
  


  ngOnChanges(changes: SimpleChanges){
		
  }
  ngOnInit() {
  }
  checkq1() {
    // this.count++;
    // this.change.emit(this.count);
    this.answercheck.emit('q1')
  }
}
