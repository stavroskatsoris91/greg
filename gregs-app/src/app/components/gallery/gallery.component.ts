import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  carousel = [
    '/images/gallery/gallery1.jpg',
    '/images/gallery/gallery2.jpg',
    '/images/gallery/gallery3.jpg',
    '/images/gallery/gallery4.jpg',
    '/images/gallery/gallery5.jpg',
    '/images/gallery/gallery6.jpg',
    '/images/gallery/gallery7.jpg',
    '/images/gallery/gallery8.jpg',
    '/images/gallery/gallery9.jpg',
    '/images/gallery/gallery10.jpg',
    '/images/gallery/gallery11.jpg',
    '/images/gallery/gallery12.jpg',
    '/images/gallery/gallery13.jpg',
    '/images/gallery/gallery14.jpg',
    '/images/gallery/gallery15.jpg',
    '/images/gallery/gallery16.jpg',
    '/images/gallery/gallery17.jpg',
    '/images/gallery/gallery18.jpg',
    '/images/gallery/gallery19.jpg',
    '/images/gallery/gallery20.jpg',
    '/images/gallery/gallery21.jpg',
    '/images/gallery/gallery22.jpg',
    '/images/gallery/gallery23.jpg',
    '/images/gallery/gallery24.jpg',
    '/images/gallery/gallery25.jpg',
    '/images/gallery/gallery26.jpg',
    '/images/gallery/gallery27.jpg',
    '/images/gallery/gallery28.jpg'
  ];
  public cLength = this.carousel.length;
  private initElement(i){
    if(i===this.cLength-1){
      window['$']('#slick')['slick']({
        autoplay:true,
        arrows: true,
        dots: false,
        infinite: true});
        this.setHeight();

    }
  };
  setHeight=()=>{
    var height = window['$']('.greg-carousel')[0].clientWidth*0.6668118466898955;
    window['$']('.greg-carousel img').css({height:height+'px'});
    // 0.6668118466898955
  }
  
  constructor() { }
  
  ngOnInit(): void {
    window['$'](window).on('resize',this.setHeight);
  }
  ngOnDestroy(): void {
    window['$'](window).off('resize', this.setHeight);
    
  }

}
