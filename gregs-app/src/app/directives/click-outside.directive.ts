import { Directive ,OnInit, OnDestroy,ElementRef, Output, EventEmitter} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective implements OnInit, OnDestroy {

  @Output() clickOutside: EventEmitter<any> = new EventEmitter();
  el: any;
  routeEvent: any;
  constructor(
    private elementRef: ElementRef, 
    private router: Router,
  ) {
  }
  ngOnInit(): void {
    this.el = this.elementRef.nativeElement;
    window['$'](document).bind('click touchstart', this.onClick);

    this.routeEvent = this.router.events
    .pipe(filter(e => e instanceof NavigationEnd))
    .subscribe((e) => {
      window['$'](document).unbind('click touchstart', this.onClick);
      window['$'](document).bind('click touchstart', this.onClick);
    });  
  }
  ngOnDestroy(): void {
    window['$'](document).unbind('click touchstart', this.onClick);
    this.routeEvent.unsubscribe();
  }
  private onClick = (event) => {
    let isChild = this.el.contains(event.target);
    let isSelf = this.el == event.target;
    let isInside = isChild || isSelf;
    if (!isInside) {
      this.clickOutside.emit();
    }
  }
}