import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCheckProduct]'
})
export class CheckProductDirective implements OnInit{

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    let li = this.el.nativeElement;
    this.renderer.setStyle(li, 'list-style-image', 'url(/assets/check-square-fill.svg)')
  }

}
