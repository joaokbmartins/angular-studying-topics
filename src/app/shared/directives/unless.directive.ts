import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appUnless]"
})
export class UnlessDirective {

  @Input('appUnless')
  set unless(condiction:boolean) {
    if (!condiction) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  constructor(private templateRef:TemplateRef<any>, private viewContainerRef:ViewContainerRef) {

  }


}