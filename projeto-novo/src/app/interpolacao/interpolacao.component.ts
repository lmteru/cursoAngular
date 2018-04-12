import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  templateUrl: './interpolacao.component.html',
  styleUrls: ['./interpolacao.component.css']
})

export class InterpolacaoComponent {

  xuxa: string;
  boo: boolean;

  constructor() {
    this.xuxa = 'Texto vem aqui';
    this.boo = false;
  }

  public retornaBaixinha() {
    return this.xuxa;
  }

  public retornaBoo() {
    return this.boo;
  }

  public baixinhaRecebe(txt: string) {
    this.xuxa = txt;
  }

  public highlight() {
    if ( this.boo ) {
      this.boo = false;
    } else {
        this.boo = true;
    }
  }
}
