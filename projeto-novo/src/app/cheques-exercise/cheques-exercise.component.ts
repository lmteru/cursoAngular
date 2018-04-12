import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterViewChecked, AfterViewInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-cheques-exercise',
  templateUrl: './cheques-exercise.component.html',
  styleUrls: ['./cheques-exercise.component.css']
})
export class ChequesExerciseComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, 
  AfterContentInit, AfterViewChecked, AfterViewInit {

  constructor() { 
    console.log("construtor");
  }

  ngOnInit() {
    console.log("onInit");
  }

  ngOnChanges(){
    console.log("onChanges");
  }

  ngDoCheck(){
    console.log("doCheck");
  }

  ngAfterContentInit(){
    console.log("afterContentInit");
  }

  ngAfterContentChecked(){
    console.log("afterContentChecked");
  }

  ngAfterViewChecked(){
    console.log("afterViewChecked");
  }

  ngAfterViewInit(){
    console.log("afterViewInit");
  }

}
