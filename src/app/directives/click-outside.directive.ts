import { Directive, Output, EventEmitter, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {

  @Output() clickOutside: EventEmitter<any> = new EventEmitter();
  el: any;
  routeEvent: any;
  constructor(
    private readonly elementRef: ElementRef,
  ) {
  }
  @HostListener('document:click', ['$event'])
  click(event) {
    this.onClick(event);
  }
  @HostListener('document:touchstart', ['$event'])
  touchstart(event) {
    this.onClick(event);
  }
  private onClick(event) {
    const el = this.elementRef.nativeElement;
    const isChild = el.contains(event.target);
    const isSelf = el == event.target;
    const isInside = isChild || isSelf;
    if (!isInside) {
      this.clickOutside.emit();
    }
  }
}