import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { GalleryService } from 'src/app/gallery.service';
import { Observable, BehaviorSubject, fromEvent, combineLatest, of, from, merge } from 'rxjs';
import { switchMap, debounceTime, map, take, mergeMap, throttleTime, share } from 'rxjs/operators';

export interface StyleImage{
  src:string,
  size:[string,string],
  style:{top:number,left:number,width:number,height:number}
}
export interface ImageSize{
  height:number,
  width:number
}
export class windowBreakpoint {
  static MobileBreakpoint: number = 768
}
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [GalleryService]
})
export class GalleryComponent {

  titles  = ['gallery.all','gallery.lessons','gallery.treks','gallery.photoshoots',
  'gallery.horseshow','gallery.carriage'];
  selected = new BehaviorSubject<string>(this.titles[0]);
  carousel:Observable<string[]> = this.selected.pipe(map(title=>this.galleryService.getImagesByTitle(title)));
  imageOriginalSizes:Observable<StyleImage[]> = this.carousel
    .pipe(
      switchMap(images=>
        combineLatest(images.map(image=>
          from(this.imagesWithSizes(image,this.galleryService.computeImageDimensionsFromFile(image)))
          )
        )
      )
    );
    getWindowsEvent = new BehaviorSubject(window);
    windowResize:Observable<Event> = fromEvent(window, 'resize').pipe(debounceTime(500));//throttleTime
  
    setImagePositions:Observable<StyleImage[]> = combineLatest(this.imageOriginalSizes,merge(this.getWindowsEvent,this.windowResize)).pipe(map(([images,_])=>{
    const { innerWidth } = window;
    const columns = Array.from(new Array(this.numberOfColumns),((_,i)=>{return{top:0,left:i*(innerWidth/this.numberOfColumns)}}));
    const styleImages:StyleImage[] = images.map((image:StyleImage):StyleImage=>{
      const selectedColumn =  columns.reduce((prev,next)=>prev.top<next.top?prev:next);
      const selectedColumnTop = selectedColumn.top;
      const selectedColumnLeft = selectedColumn.left;
      const imageHeight = this.sizeOnWindow(image,innerWidth/columns.length).height;
      selectedColumn.top+= imageHeight
      const imageWidth = 100/this.numberOfColumns;
      image.style = {
        top: selectedColumnTop,
        left: selectedColumnLeft,
        width: imageWidth,
        height: imageHeight
      }
      return image
    })
    console.log(this.index++)
    return styleImages;
  }),share())
  index=0;
  containersHeight: Observable<string> = this.setImagePositions.pipe(map((images:StyleImage[])=>{
    const maxHeight = images.map((image:StyleImage):number=>{
      return image.style.top+image.style.height;
    }).reduce(function(a, b) {

        return Math.max(a, b);
    });
    return `${maxHeight}px`;
  }))
  get numberOfColumns(){
    return Math.ceil(innerWidth/windowBreakpoint.MobileBreakpoint);
  }
  galleryItems = combineLatest()
  constructor(
    private readonly elementRef: ElementRef<any>,
    private readonly renderer: Renderer2,
    private readonly galleryService: GalleryService
  ){

  }
  ngOnInit(){

  }
  public selectedTitle(title){
    return this.selected == title;
  }
  async imagesWithSizes(src,size):Promise<StyleImage>{
    const a = await size;
    return {src:src,size: a,style:{top:0,left:0,width:0,height:0}}
  }
  private sizeOnWindow(image,width):{width:number,height:number}{
    const {size} = image;
    const ratio = width/size[0];
    return {
      width:size[0]*ratio,
      height:size[1]*ratio
    }
  }
}
