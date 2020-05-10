import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photoshoots',
  templateUrl: './photoshoots.component.html',
  styleUrls: ['./photoshoots.component.scss']
})
export class PhotoshootsComponent implements OnInit {

  photoshoots=[
    'Want to a try something different for a special occasion?',
    'Why not hire our horses to make your wedding day, proposal, anniversary, any day even more unique and unforgettable?',
    'Choose the horses you like and be ready for a beautiful photoshoot next to the view of the sea or mountain while watching the sunset.'
  ];
  photos = ['/images/photo1.jpg','/images/photo2.jpg','/images/photo3.jpg'];
  constructor() { }

  ngOnInit(): void {
  }
  showModal (pos) {
    var list = this.photos.map(function (x) {
      return { img: x };
    });
    // $rootScope.$broadcast('showModal', list,pos);
  };
}
