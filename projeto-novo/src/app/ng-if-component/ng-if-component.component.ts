import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-component',
  templateUrl: './ng-if-component.component.html',
  styleUrls: ['./ng-if-component.component.css']
})
export class NgIfComponentComponent implements OnInit {

  constructor() { }

  isRender:boolean = true;
  isRenderNot:boolean;
  ngOnInit() {
    this.isRenderNot = this.isRender;
  }

  invert(){
    this.isRender = !this.isRender;
  }

}
