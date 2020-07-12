import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  title:string = 'Where to Find Us';
  location:string = 'Spetses, 180 50';
  show:boolean = false;
  openMap:boolean = false;
  imageInfo = require('src/assets/images/info.svg');
  imageClock = require('src/assets/images/clock.png');
  imageLocation = require('src/assets/images/location.png');
  imagePhone = require('src/assets/images/phone2.png');
  imageGoogleMaps = require('src/assets/images/googlemaps.jpg');
  constructor() { }

  ngOnInit(): void {
  }
}
