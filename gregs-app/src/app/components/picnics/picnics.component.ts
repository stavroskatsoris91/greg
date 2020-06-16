import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

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
  photos = [require('src/assets/images/picnics/picnic-1.jpg')];

  constructor(private ModalService: ModalService) { }

  ngOnInit(): void {
  }
  public showModal(pos) {
    var list = this.photos.map((x) => {
      return { img: x };
    });
    this.ModalService.triggerEvent([list,pos]);
  }
}
