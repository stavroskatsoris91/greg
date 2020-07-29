import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-photoshoots',
  templateUrl: './photoshoots.component.html',
  styleUrls: ['./photoshoots.component.scss']
})
export class PhotoshootsComponent implements OnInit {

  title = this.language.photoshoots.title;
  photoshoots= this.language.photoshoots.photoshoots;
  photos = [require('src/assets/images/photo1.jpg'),require('src/assets/images/photo2.jpg'),require('src/assets/images/photo3.jpg')];
  constructor(private ModalService: ModalService,
    private readonly language: LanguageService) { }

  ngOnInit(): void {
  }
  showModal (pos) {
    var list = this.photos.map(function (x) {
      return { img: x };
    });
    this.ModalService.triggerEvent([list,pos]);
  };
}
