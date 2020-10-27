
import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'img[src]'
})
export class ImagePreloadDirective {
  @Input()
  @HostBinding('src')
  set src(v) {
    this._src = v.__esModule?v.default:v;
  }
  get src() {
    return this._src;
  }
  private _src;
}