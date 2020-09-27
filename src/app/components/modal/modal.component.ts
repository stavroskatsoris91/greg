import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { GalleryService } from 'src/app/gallery.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  left = '<';
  right = '>';
  index = 0;
  group: any =null;
  min = 0;
  max = 0;
  imageHeight:BehaviorSubject<string> = new BehaviorSubject('0px')
  imageWidth:BehaviorSubject<string> = new BehaviorSubject(`${this.imageStyleWidth}px`)
  constructor(private ModalService: ModalService,
    private galleryService: GalleryService) { }
  @ViewChild('ImageContent', { static: false })
    private readonly ImageContentComponent: ElementRef<HTMLDivElement>
  ngOnInit(): void {
    this.ModalService.listenEvent().subscribe((ev)=>{
      let data = ev[0];
      let pos = ev[1];
      this.index = pos||0;
      this.group = data;
      this.max =this.group.length-1;
      this.getHeight(this.imgSrc)
    })
  }
  @HostListener('window:resize')
  onResize() {
    this.getHeight(this.imgSrc)
  }
  get isModalOpen(){
    return Boolean(this.group);
  }
  public prev(){
    this.index = this.index-1>=0?this.index-1:this.max;
    this.getHeight(this.imgSrc);
  };
  public next(){
    this.index = (this.index+1)%(this.max+1);
    this.getHeight(this.imgSrc);
  };
  public async getHeight(src){
    const [width,height] = await this.galleryService.computeImageDimensionsFromFile(src);
    const contentWidth = this.imageStyleWidth
    const contentHeight = window.innerHeight;
    const ratio = Math.min(contentWidth/width,contentHeight/height);
    this.imageHeight.next(`${height*ratio}px`)
    this.imageWidth.next(`${width*ratio}px`)
  }
  get imageStyleWidth(){
    return Math.min(window.innerWidth*.95,800);
  }
  get imgSrc(){
    return this.group[this.index].img;
  }
  public get imageUrl(){
    return `url(${this.imgSrc})`
  }

}
