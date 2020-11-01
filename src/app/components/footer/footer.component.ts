import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  show:boolean = false;
  openMap:boolean = false;
  public readonly year = new Date().getFullYear();
  imageInfo = require('src/assets/images/footer/info.svg').default;
  imageClock = require('src/assets/images/footer/clock.png').default;
  imageLocation = require('src/assets/images/footer/location.png').default;
  imagePhone = require('src/assets/images/footer/phone2.png').default;
  imageGoogleMaps = require('src/assets/images/footer/googlemaps.jpg').default;
  constructor() { }
}
