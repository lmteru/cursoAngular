import { Directive, ElementRef, style, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appTesteDiretiva]'
})
export class TesteDiretivaDirective {

  private colorNumber = '#'+Math.floor(Math.random()*16777215).toString(16);

  @HostListener('mouseover') eventTest(){
    console.log(this.colorNumber);
    this.render.setElementStyle(this.elementRef.nativeElement, 'color','#'+Math.floor(Math.random()*16777215).toString(16));
    // console.log(this.colorNumber);
  };

  constructor( private render: Renderer , private elementRef : ElementRef) { 
    // console.log(elementRef);
    this.render.setElementStyle(this.elementRef.nativeElement, 'color','#'+Math.floor(Math.random()*16777215).toString(16));
    // elementRef.nativeElement.style.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    elementRef.nativeElement.style.textDecoration = 'underline';
  }

}
