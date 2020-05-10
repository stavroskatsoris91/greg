import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picnics',
  templateUrl: './picnics.component.html',
  styleUrls: ['./picnics.component.scss']
})
export class PicnicsComponent implements OnInit {

  picnics = [
    'Are you looking for a beautiful area with plenty of space for a children\'s party with the extra excitement of horse riding too?',
    'Or organize a different picnic for you and your friends or family?',
    ' Contact us for more details.'
  ];
  photos = ['/images/picnics/picnic-1.jpg'];

  constructor() { }

  ngOnInit(): void {
  }
  public showModal = function (pos) {
    var list = this.photos.map((x) => {
      return { img: x };
    });
    // $rootScope.$broadcast('showModal', list,pos);
  };
}
