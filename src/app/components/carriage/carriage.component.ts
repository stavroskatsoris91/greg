import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-carriage',
  templateUrl: './carriage.component.html',
  styleUrls: ['./carriage.component.scss']
})
export class CarriageComponent implements OnInit {

  title = this.language.carriage.title;
  carriageText= this.language.carriage.text;
  photos = [require('src/assets/images/carriage/carriage1.jpg'),require('src/assets/images/carriage/carriage3.jpg'),require('src/assets/images/carriage/carriage2.jpg')];
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
