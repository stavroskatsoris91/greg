import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-picnics',
  templateUrl: './picnics.component.html',
  styleUrls: ['./picnics.component.scss']
})
export class PicnicsComponent implements OnInit {

  title = this.language.picnics.title;
  picnics = this.language.picnics.picnics;
  photos = [require('src/assets/images/picnics/picnic-1.jpg')];

  constructor(private ModalService: ModalService,
    private readonly language: LanguageService) { }

  ngOnInit(): void {
  }
  public showModal(pos) {
    var list = this.photos.map((x) => {
      return { img: x };
    });
    this.ModalService.triggerEvent([list,pos]);
  }
}
