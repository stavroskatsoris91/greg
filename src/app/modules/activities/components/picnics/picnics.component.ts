import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-picnics',
  templateUrl: './picnics.component.html',
  styleUrls: ['./picnics.component.scss']
})
export class PicnicsComponent implements OnInit {

  picnics = ['picnics.picnics.copy1', 'picnics.picnics.copy2', 'picnics.picnics.copy3']
  photos = [require('src/assets/images/picnics/picnic-1.jpg').default];

  constructor(private ModalService: ModalService) { }

  ngOnInit(): void {
  }
  public showModal(pos) {
    var list = this.photos.map((x) => {
      return { img: x };
    });
    this.ModalService.triggerEvent({ list, position: pos });

  }
}
