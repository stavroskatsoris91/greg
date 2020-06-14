import { Directive, Output, EventEmitter, OnInit } from '@angular/core';

@Directive({
  selector: '[appInitalize]'
})
export class InitalizeDirective implements OnInit {

  @Output() appInitalize: EventEmitter<any> = new EventEmitter();

  constructor(){}
  ngOnInit() {
    this.appInitalize.emit();
  }

}
