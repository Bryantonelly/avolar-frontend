import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css']
})
export class PaquetesComponent implements OnInit {

  public isCollapsed = true;

  constructor(private elementRef: ElementRef,) { }

  ngOnInit(): void {
    setInterval(()=>this.scroll(100), 7000);
  }

  // isSelectOpen = false;

  // onSelectOpenChange(event: any) {
  //   if (!event) {
  //     // El select se cerró, así que restablecemos el valor a false
  //     this.isSelectOpen = false;
  //   }
  // }


  @ViewChild('scrollableDiv') scrollableDiv!: ElementRef;

  scroll(scrollOffset: number) {
    const scrollableElement = this.scrollableDiv.nativeElement;
    const wrapper = document.querySelector('.carousel-wrapper') as HTMLElement;
    const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
    if(scrollableElement.scrollLeft == 0 && scrollOffset < 0){
      scrollableElement.scrollLeft = maxScroll-.1
    }
    scrollableElement.scrollLeft += scrollOffset;

    if(maxScroll < scrollableElement.scrollLeft){
      scrollableElement.scrollLeft = 0
    }
    console.log("maxScroll",maxScroll)
    console.log("maxScroll",maxScroll)
    console.log("scrollableElement.scrollLeft",scrollableElement.scrollLeft)
  }

}
