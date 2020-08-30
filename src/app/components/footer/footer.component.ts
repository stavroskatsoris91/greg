import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  title:string = this.language.footer.title;
  location:string = this.language.footer.location;
  time = this.language.footer.time;
  info:string[]=this.language.footer.info;
  show:boolean = false;
  openMap:boolean = false;
  imageInfo = require('src/assets/images/footer/info.svg');
  imageClock = require('src/assets/images/footer/clock.png');
  imageLocation = require('src/assets/images/footer/location.png');
  imagePhone = require('src/assets/images/footer/phone2.png');
  imageGoogleMaps = require('src/assets/images/footer/googlemaps.jpg');
  constructor(
    private readonly language: LanguageService
  ) { }

  ngOnInit(): void {
  }
}
