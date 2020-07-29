import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
@Component({
  selector: 'app-horses',
  templateUrl: './horses.component.html',
  styleUrls: ['./horses.component.scss']
})
export class HorsesComponent implements OnInit {

    now = new Date().getFullYear();
    private getAge(year){
      return (this.now-year);
    }
    breed = this.language.horses.breed
    colour = this.language.horses.colour
    age = this.language.horses.age
    height = this.language.horses.height
    horses = [
      {
        name: 'REBECCA',
        breed: null,
        colour: 'Chestnut',
        age: this.getAge(2003)+this.language.horses.years,
        height: '1.35m',
        images: [require('src/assets/images/horses/rebecca1.jpg'),require('src/assets/images/horses/rebecca2.jpg'),require('src/assets/images/horses/rebecca3.jpg'),require('src/assets/images/horses/rebecca4.jpg')],
        text: this.language.horses.rebecca
      }, {
        name: 'ROBBIE',
        breed: 'Haflinger',
        colour: null,
        age: this.getAge(2009)+this.language.horses.years,
        height: '1.50m',
        images:[require('src/assets/images/horses/robbie1.jpg'),require('src/assets/images/horses/robbie2.jpg'),require('src/assets/images/horses/robbie3.jpg'),require('src/assets/images/horses/robbie4.jpg'),require('src/assets/images/horses/robbie5.jpg')],
        text: this.language.horses.robbie
      },
      {
        name: 'NELLY',
        breed: 'Cob',
        colour: null,
        age: this.getAge(2009)+this.language.horses.years,
        height: '1.45m',
        images:[require('src/assets/images/horses/nelly1.jpg'),require('src/assets/images/horses/nelly2.jpg'),require('src/assets/images/horses/nelly3.jpg'),require('src/assets/images/horses/nelly4.jpg')],
        text: this.language.horses.nelly
      }, {
        name: 'OSCAR',
        breed: 'Pinto',
        colour: null,
        age: this.getAge(2009)+this.language.horses.years,
        height: '1.40m',
        images:[require('src/assets/images/horses/oscar1.jpg'),require('src/assets/images/horses/oscar2.jpg'),require('src/assets/images/horses/oscar3.jpg')],
        text: this.language.horses.oscar
      }, {
        name: 'OLIVIA',
        breed: null,
        colour: 'Grey',
        age: this.getAge(2011)+this.language.horses.years,
        height: '1.60m',
        images:[require('src/assets/images/horses/olivia1.jpg'),require('src/assets/images/horses/olivia2.jpg'),require('src/assets/images/horses/olivia3.jpg')],
        text: this.language.horses.olivia
      }, {
        name: 'ELINA',
        breed: null,
        colour: 'Chestnut',
        age: this.getAge(2012)+this.language.horses.years,
        height: '1.36m',
        images:[require('src/assets/images/horses/elina1.jpg'),require('src/assets/images/horses/elina2.jpg'),require('src/assets/images/horses/elina3.jpg')],
        text: this.language.horses.elina
      }, {
        name: 'ROSIE',
        breed: 'Thoroughbred/American saddlebred',
        colour: null,
        age: this.getAge(2014)+this.language.horses.years,
        height: '1.75m',
        images:[require('src/assets/images/horses/rosie1.jpg'),require('src/assets/images/horses/rosie2.jpg'),require('src/assets/images/horses/rosie3.jpg')],
        text: this.language.horses.rosie
      }, {
        name: 'ANGEL',
        breed: 'Haflinger',
        colour: null,
        age: this.getAge(2011)+this.language.horses.years,
        height: '1.35m',
        images:[require('src/assets/images/horses/angel1.jpg'),require('src/assets/images/horses/angel2.jpg'),require('src/assets/images/horses/angel3.jpg'),require('src/assets/images/horses/angel4.jpg')],
        text: this.language.horses.angel
      },
      {
        name: 'TITAN',
        breed: null,
        colour: 'Black',
        age: this.getAge(2013)+this.language.horses.years,
        height: '1.60m',
        images: [require('src/assets/images/horses/titan1.jpg'),require('src/assets/images/horses/titan2.jpg'),require('src/assets/images/horses/titan3.jpg'),require('src/assets/images/horses/titan4.jpg')],
        text: this.language.horses.titan
      }
    ];
  constructor(
    private readonly language: LanguageService
  ) { }

  ngOnInit(): void {
  }

}
