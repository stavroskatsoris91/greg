import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

interface IModalImage{
  img:string
}
interface IModalImageList{
  list:IModalImage[],
  position:number
}
interface IModalEntity extends IModalImageList{
  max:number
}

@Injectable({
  providedIn: 'any'
})
export class ModalService {

  observer:Observer<any> = null;
  private modalList: Subject<IModalImageList> = new Subject();
  observable:Observable<any> = new Observable((x)=>{
    this.observer = x;
  })
  listOfImages: Observable<IModalEntity> = this.modalList.pipe(
    map((modalItem)=>{
      const {list=[], position=0} = modalItem||{};
      const maxLength = list.length;
      const selectedImage = Math.min((position||0),maxLength-1)
      return {
        list: list,
        position:selectedImage,
        max: maxLength
      }
    }),
    shareReplay(1)
  )
  constructor() { }
  public getList():Observable<IModalEntity>{
    return this.listOfImages;
  }
  public triggerEvent(x:IModalImageList){
    this.modalList.next(x);
  }
}
