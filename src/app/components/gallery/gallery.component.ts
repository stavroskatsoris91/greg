import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  carousel = [
    require('src/assets/images/gallery/gallery1.jpg').default,
    require('src/assets/images/gallery/gallery2.jpg').default,
    require('src/assets/images/gallery/gallery3.jpg').default,
    require('src/assets/images/gallery/gallery4.jpg').default,
    require('src/assets/images/gallery/gallery5.jpg').default,
    require('src/assets/images/gallery/gallery6.jpg').default,
    require('src/assets/images/gallery/gallery7.jpg').default,
    require('src/assets/images/gallery/gallery8.jpg').default,
    require('src/assets/images/gallery/gallery9.jpg').default,
    require('src/assets/images/gallery/gallery10.jpg').default,
    require('src/assets/images/gallery/gallery11.jpg').default,
    require('src/assets/images/gallery/gallery12.jpg').default,
    require('src/assets/images/gallery/gallery13.jpg').default,
    require('src/assets/images/gallery/gallery14.jpg').default,
    require('src/assets/images/gallery/gallery15.jpg').default,
    require('src/assets/images/gallery/gallery16.jpg').default,
    require('src/assets/images/gallery/gallery17.jpg').default,
    require('src/assets/images/gallery/gallery18.jpg').default,
    require('src/assets/images/gallery/gallery19.jpg').default,
    require('src/assets/images/gallery/gallery20.jpg').default,
    require('src/assets/images/gallery/gallery21.jpg').default,
    require('src/assets/images/gallery/gallery22.jpg').default,
    require('src/assets/images/gallery/gallery23.jpg').default,
    require('src/assets/images/gallery/gallery24.jpg').default,
    require('src/assets/images/gallery/gallery25.jpg').default,
    require('src/assets/images/gallery/gallery26.jpg').default,
    require('src/assets/images/gallery/gallery27.jpg').default,
    require('src/assets/images/gallery/gallery28.jpg').default
  ];
  cLength = this.carousel.length;
  slideConfig = {
    autoplay:true,
    arrows: true,
    dots: false,
    infinite: true
  };
  height: number = 0;
  constructor(private readonly element: ElementRef) { }
  async ngAfterViewInit() {
    this.setHeight();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setHeight();
  }
  public initElements=(i)=>{
    if(i==this.cLength-1){
      this.setHeight();
    }
  };
  get imgHeight(){
    return {height:this.height+'px'}
  }
  setHeight=()=>{
    this.height = this.element.nativeElement.getElementsByTagName('ngx-slick-carousel')[0].clientWidth*0.6668118466898955;
  }
}
