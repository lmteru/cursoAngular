import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dois-btn',
  templateUrl: './dois-btn.component.html',
  styleUrls: ['./dois-btn.component.css']
})
export class DoisBtnComponent implements OnInit {

  size: number = 14;

  constructor() { }

  ngOnInit() {
    this.size=14;
  }

  public atualiza(){

  }

  public returnSize(){
    return this.size;
  }

}
