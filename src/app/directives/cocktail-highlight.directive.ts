import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCocktailHighlight]',
  standalone: true,
})
export class CocktailHighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      'box-shadow 0.2s ease-in-out'
    );
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'boxShadow',
      '0 0 15px rgba(0, 0, 0, 0.7)'
    );
    this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'boxShadow');
    this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid black');
  }
}
