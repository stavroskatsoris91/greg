import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  carousel = [
    require('src/assets/images/gallery/gallery1.jpg'),
    require('src/assets/images/gallery/gallery2.jpg'),
    require('src/assets/images/gallery/gallery3.jpg'),
    require('src/assets/images/gallery/gallery4.jpg'),
    require('src/assets/images/gallery/gallery5.jpg'),
    require('src/assets/images/gallery/gallery6.jpg'),
    require('src/assets/images/gallery/gallery7.jpg'),
    require('src/assets/images/gallery/gallery8.jpg'),
    require('src/assets/images/gallery/gallery9.jpg'),
    require('src/assets/images/gallery/gallery10.jpg'),
    require('src/assets/images/gallery/gallery11.jpg'),
    require('src/assets/images/gallery/gallery12.jpg'),
    require('src/assets/images/gallery/gallery13.jpg'),
    require('src/assets/images/gallery/gallery14.jpg'),
    require('src/assets/images/gallery/gallery15.jpg'),
    require('src/assets/images/gallery/gallery16.jpg'),
    require('src/assets/images/gallery/gallery17.jpg'),
    require('src/assets/images/gallery/gallery18.jpg'),
    require('src/assets/images/gallery/gallery19.jpg'),
    require('src/assets/images/gallery/gallery20.jpg'),
    require('src/assets/images/gallery/gallery21.jpg'),
    require('src/assets/images/gallery/gallery22.jpg'),
    require('src/assets/images/gallery/gallery23.jpg'),
    require('src/assets/images/gallery/gallery24.jpg'),
    require('src/assets/images/gallery/gallery25.jpg'),
    require('src/assets/images/gallery/gallery26.jpg'),
    require('src/assets/images/gallery/gallery27.jpg'),
    require('src/assets/images/gallery/gallery28.jpg')
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
