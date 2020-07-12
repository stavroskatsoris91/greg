import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  observer:Observer<any> = null;
  observable:Observable<any> = new Observable((x)=>{
    this.observer = x;
  })
  
  constructor() { }
  public listenEvent(){
    return this.observable;
  }
  public triggerEvent(x){
    this.observer.next(x);
  }
}
