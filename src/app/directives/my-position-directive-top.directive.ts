import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myPositionDirectiveTop]'
})

export class MyPositionDirectiveTop {
  @Input() initialTop: number = 0;
  scrollY: number = 0;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollY = window.scrollY || window.pageYOffset;
    // console.log('Scroll Y: ', this.scrollY);
    const elementPosition = this.elementRef.nativeElement.getBoundingClientRect().top;
    if(window.innerHeight!==undefined){
      const windowHeight = window.innerHeight;
      // console.log('posiscion',elementPosition)
      // console.log('windowhei',windowHeight)
      if (this.scrollY >= windowHeight - 80) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'margin-top', '180px');
      } else if (this.scrollY < windowHeight) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'margin-top', `${this.initialTop}px`);
      }
      else {
        this.renderer.setStyle(this.elementRef.nativeElement, 'margin-top', '180px');
      }
    }
  }
}
