import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-carriage',
  templateUrl: './carriage.component.html',
  styleUrls: ['./carriage.component.scss']
})
export class CarriageComponent implements OnInit {

  carriageCopy= ['carriage.copy1', 'carriage.copy2']
  photos = [require('src/assets/images/carriage/carriage5.jpg').default,require('src/assets/images/carriage/carriage4.jpg').default,require('src/assets/images/carriage/carriage1.jpg').default];
  constructor(private ModalService: ModalService) { }

  ngOnInit(): void {
  }
  showModal (pos) {
    var list = this.photos.map(function (x) {
      return { img: x };
    });
    this.ModalService.triggerEvent({list, position:pos});
  };

}
