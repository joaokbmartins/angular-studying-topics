import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({

  selector: '[appBasicHighLight]'

})

export class BasicHighLightDirective implements OnInit {

  public constructor(private elementRef:ElementRef) {

  }

  ngOnInit() { 
    this.elementRef.nativeElement.style.backgroundColor = "cyan";
  }

}