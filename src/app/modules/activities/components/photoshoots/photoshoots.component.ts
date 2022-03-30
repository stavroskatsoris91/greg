import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-photoshoots',
  templateUrl: './photoshoots.component.html',
  styleUrls: ['./photoshoots.component.scss']
})
export class PhotoshootsComponent implements OnInit {

  photoshoots= ['photoshoots.photoshoots.copy1','photoshoots.photoshoots.copy2','photoshoots.photoshoots.copy3'];
  photos = [require('src/assets/images/photoshoots/photo1.jpg').default,require('src/assets/images/photoshoots/photo2.jpg').default,require('src/assets/images/photoshoots/photo3.jpg').default];
  constructor(private ModalService: ModalService) { }

  ngOnInit(): void {
  }
  showModal (pos) {
    var list = this.photos.map(function (x) {
      return { img: x };
    });
    this.ModalService.triggerEvent({ list, position: pos });

  };
}
