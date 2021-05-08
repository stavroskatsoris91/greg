import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  show:boolean = false;
  openMap:boolean = false;
  mapIsLoaded:boolean;
  public readonly year = new Date().getFullYear();
  imageInfo = require('src/assets/images/footer/info.svg').default;
  imageClock = require('src/assets/images/footer/clock.png').default;
  imageLocation = require('src/assets/images/footer/location.png').default;
  imagePhone = require('src/assets/images/footer/phone2.png').default;
  imageGoogleMaps = require('src/assets/images/footer/googlemaps.jpg').default;
  
  googleHorses = [
    {
      title: "Greg' Spetses Horses",
      lat: 37.239282,
      lng: 23.147472,
      icon: require("src/assets/images/googlemap/horse0.png").default,
    },
    {
      title: "Greg' Spetses Horses",
      lat: 37.239148,
      lng: 23.147901,
      icon: require("src/assets/images/googlemap/horse1.png").default,
    },
    {
      title: "Greg' Spetses Horses",
      lat: 37.239151,
      lng: 23.147985,
      icon: require("src/assets/images/googlemap/horse2.png").default,
    },
    {
      title: "Greg' Spetses Horses",
      lat: 37.239063,
      lng: 23.14797,
      icon: require("src/assets/images/googlemap/horse3.png").default,
    },
    {
      title: "Greg' Spetses Horses",
      lat: 37.239062,
      lng: 23.14787,
      icon: require("src/assets/images/googlemap/horse4.png").default,
    },
  ];

  mapLoaded(event){
    this.mapIsLoaded = event;
  }
  constructor() { }
}
