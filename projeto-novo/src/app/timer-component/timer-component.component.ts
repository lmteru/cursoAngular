import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-timer-component',
  templateUrl: './timer-component.component.html',
  styleUrls: ['./timer-component.component.css']
})
export class TimerComponentComponent implements OnInit {

   @ViewChild('inputField') elemento: ElementRef;
   interval: NodeJS.Timer;
   n=0;
   constructor() { }

  ngOnInit() { 
  }

  start(){
    this.interval = setInterval(() => (this.n++), 1000);  
   }

   stop(){
     clearInterval(this.interval);
   }
}
