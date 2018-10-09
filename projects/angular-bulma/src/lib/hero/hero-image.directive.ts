import { Directive,
  ElementRef,
  Input,
  Renderer2,
  SimpleChanges,
  AfterViewInit,
  OnChanges
 } from '@angular/core';

@Directive({
  selector: '[bulmaHeroImage]'
})

export class HeroImageDirective implements OnChanges, AfterViewInit {
  private el: HTMLElement;
  @Input() bulmaHeroImage: string;
  @Input() bulmaHeroSize: string;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {
    this.el = this.elRef.nativeElement;
  }

  ngAfterViewInit() {
    this.setHeroImage();
    this.setHeroSize();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['bulmaHeroImage']) {
      this.setHeroImage();
    }
  }

  setHeroImage() {
    this.renderer.setStyle(
      this.el.querySelector('.hero'),
      'backgroundImage',
      `url(${this.bulmaHeroImage})`
    );
  }

  setHeroSize() {
    this.renderer.addClass(
      this.el.querySelector('.hero'),
      `is-${this.bulmaHeroSize}`
    );
  }
}
