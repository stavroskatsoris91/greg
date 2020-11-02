import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-empty-box',
  templateUrl: './empty-box.component.html',
  styleUrls: ['./empty-box.component.scss'],
  animations: [
    trigger('displayArrow', [
      state('closed', style({ opacity:0 })),
      transition('* => open', [
          animate('1000ms ease-out', style({ opacity: 1 })),
      ]),
      transition('open => closed', [
        animate('1000ms ease-out', style({ opacity: 0 })),
    ]),
    ])
  ]
})
export class EmptyBoxComponent implements OnInit {

  constructor() { }

  
  arrowState: BehaviorSubject<string> = new BehaviorSubject('closed');
  ngOnInit(): void {
    this.openArrow();
  }
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    if(!this.hasScrolled){
      this.openArrow();
    }else{
      this.arrowState.next('closed');
    }
  }
  openArrow(){
    setTimeout(() => {
      if(!this.hasScrolled){
        this.arrowState.next('open');
      }
    }, 4000);
  }
  get hasScrolled(){
    return window.pageYOffset>100;
  }
  scrollDown(anchor: HTMLElement){
    anchor.scrollIntoView({behavior:"smooth"});
    this.arrowState.next('closed');
  }
}
