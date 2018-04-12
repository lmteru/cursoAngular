import { Directive, ElementRef, style, HostListener } from '@angular/core';

@Directive({
  selector: '[appDiretivaSegunda]'
})
export class DiretivaSegundaDirective {

  @HostListener('mouseover') chosenEvent(){
    this.elementRef.nativeElement.style.transform = 'rotate('+Math.random()*360 +'deg)';
  }
  

  constructor(private elementRef: ElementRef) { 
    console.log(elementRef);
    elementRef.nativeElement.style.fontStyle = 'oblique';
    elementRef.nativeElement.style.transform = 'rotate('+Math.random()*360 +'deg)';
  }

}
