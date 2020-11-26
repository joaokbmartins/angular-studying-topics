import {
  Directive,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive ({
  selector: '[appBetterHighLightDirective]',
})

export class BetterHighLightDirective implements OnInit {

  @Input()
  private bgInit = 'transparent';

  @Input('appBetterHighLightDirective')
  private bgHover = 'yellow';

  @HostBinding('style.backgroundColor')
  private backgroundColor: string = null;

  public constructor(private elRef: ElementRef, private renderer: Renderer2) { 
  }
  
  public ngOnInit() {
    this.backgroundColor = this.bgInit;
  }
  
  @HostListener('mouseenter')
  public mousehover(mouseEvent: Event): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = this.bgHover;
  }
  
  @HostListener('mouseleave') 
  public mouseleave(mouseEvent: Event): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.bgInit;
  }
  
}