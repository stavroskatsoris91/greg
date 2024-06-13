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
  imageInfo = './assets/images/footer/info.svg';
  imageClock = './assets/images/footer/clock.png';
  imageLocation = './assets/images/footer/location.png';
  imagePhone = './assets/images/footer/phone2.png';
  imageGoogleMaps = './assets/images/footer/googlemaps.jpg';
  
  googleHorses = [
    {
      title: "Greg' Spetses Horses",
      lat: 37.239282,
      lng: 23.147472,
      icon: "./assets/images/googlemap/horse0.png",
    },
    {
      title: "Greg' Spetses Horses",
      lat: 37.239148,
      lng: 23.147901,
      icon: "./assets/images/googlemap/horse1.png",
    },
    {
      title: "Greg' Spetses Horses",
      lat: 37.239151,
      lng: 23.147985,
      icon: "./assets/images/googlemap/horse2.png",
    },
    {
      title: "Greg' Spetses Horses",
      lat: 37.239063,
      lng: 23.14797,
      icon: "./assets/images/googlemap/horse3.png",
    },
    {
      title: "Greg' Spetses Horses",
      lat: 37.239062,
      lng: 23.14787,
      icon: "./assets/images/googlemap/horse4.png",
    },
  ];

  mapLoaded(event){
    this.mapIsLoaded = event;
  }
  constructor() { }
}
