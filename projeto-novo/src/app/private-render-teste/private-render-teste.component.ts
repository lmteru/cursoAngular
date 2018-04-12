import { Component, OnInit, Renderer, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-private-render-teste',
  templateUrl: './private-render-teste.component.html',
  styleUrls: ['./private-render-teste.component.css']
})
export class PrivateRenderTesteComponent implements OnInit {

  constructor(private render: Renderer, private elementRef: ElementRef) { 
    this.render.setElementStyle(this.elementRef, 'background-color', 'black');
  }

  ngOnInit() {
  }

}
