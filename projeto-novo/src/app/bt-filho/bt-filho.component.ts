import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bt-filho',
  templateUrl: './bt-filho.component.html',
  styleUrls: ['./bt-filho.component.css']
})
export class BtFilhoComponent implements OnInit {

  @Input() tam:number;

  @Output() tamChange = new EventEmitter();

  @ViewChild("inputField") elemento: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  public add(){
    this.tam++;
    this.tamChange.emit(this.tam);
    this.elemento.nativeElement.value++;
    console.log(this.tam);
  }

  public dim(){
    if(this.tam>0){
      this.tam--;
      this.elemento.nativeElement.value--;
    }
     
    this.tamChange.emit(this.tam);
  }
  

}
