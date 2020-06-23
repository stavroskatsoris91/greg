import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-carriage',
  templateUrl: './carriage.component.html',
  styleUrls: ['./carriage.component.scss']
})
export class CarriageComponent implements OnInit {

  carriageText=[
    'Horse carriages are one of our island’s most well known traditions. Don’t miss a tour with a beautiful Victoria carriage and the opportunity to learn about Spetses history.',
    'Call us for bookings. Prices depend on the duration of your tour.'
  ];
  photos = [require('src/assets/images/carriage/carriage1.jpg'),require('src/assets/images/carriage/carriage2.jpg'),require('src/assets/images/carriage/carriage3.jpg')];
  constructor(private ModalService: ModalService) { }

  ngOnInit(): void {
  }
  showModal (pos) {
    var list = this.photos.map(function (x) {
      return { img: x };
    });
    this.ModalService.triggerEvent([list,pos]);
  };

}
