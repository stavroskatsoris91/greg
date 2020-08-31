import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  show:boolean = false;
  openMap:boolean = false;
  imageInfo = require('src/assets/images/footer/info.svg');
  imageClock = require('src/assets/images/footer/clock.png');
  imageLocation = require('src/assets/images/footer/location.png');
  imagePhone = require('src/assets/images/footer/phone2.png');
  imageGoogleMaps = require('src/assets/images/footer/googlemaps.jpg');
  constructor() { }
}
