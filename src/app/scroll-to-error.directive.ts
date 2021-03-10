import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollToError]'
})
export class ScrollToErrorDirective {

  @HostListener('submit')
  onSubmit(){
    this.scrollToError()
  }
  constructor(
    private readonly elementRef: ElementRef
  ) { }

  private scrollToError(): void {
    const elementsWithError = this.elementRef.nativeElement.getElementsByClassName('ng-invalid');
    const secondElementWithError = elementsWithError[0];
    if(secondElementWithError){
      this.scrollToElement(secondElementWithError.previousElementSibling);
    }
  }
  private scrollToElement(el: Element): void {
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}
