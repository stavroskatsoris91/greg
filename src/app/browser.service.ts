import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {

  constructor(@Inject(DOCUMENT) private doc: Document) { }
  get window(){
    return this.document.defaultView
  }
  get document(){
    return this.doc;
  }
}
