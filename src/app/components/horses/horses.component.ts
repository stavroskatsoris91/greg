import { Component, OnInit } from '@angular/core';
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
    horses = [
      {
        name: 'REBECCA',
        breed: null,
        colour: 'horses.colours.chestnut',
        age: this.getAge(2003),
        height: '1.35m',
        images: [require('src/assets/images/horses/rebecca1.jpg').default,require('src/assets/images/horses/rebecca2.jpg').default,require('src/assets/images/horses/rebecca3.jpg').default,require('src/assets/images/horses/rebecca4.jpg').default],
        text: ['horses.rebecca.copy1','horses.rebecca.copy2']
      }, {
        name: 'ROBBIE',
        breed: 'Haflinger',
        colour: null,
        age: this.getAge(2009),
        height: '1.50m',
        images:[require('src/assets/images/horses/robbie1.jpg').default,require('src/assets/images/horses/robbie2.jpg').default,require('src/assets/images/horses/robbie3.jpg').default,require('src/assets/images/horses/robbie4.jpg').default,require('src/assets/images/horses/robbie5.jpg').default],
        text: ['horses.robbie.copy1']
      },
      {
        name: 'NELLY',
        breed: 'Cob',
        colour: null,
        age: this.getAge(2009),
        height: '1.45m',
        images:[require('src/assets/images/horses/nelly1.jpg').default,require('src/assets/images/horses/nelly2.jpg').default,require('src/assets/images/horses/nelly3.jpg').default,require('src/assets/images/horses/nelly4.jpg').default],
        text: ['horses.nelly.copy1']
      }, {
        name: 'OSCAR',
        breed: 'Pinto',
        colour: null,
        age: this.getAge(2009),
        height: '1.40m',
        images:[require('src/assets/images/horses/oscar1.jpg').default,require('src/assets/images/horses/oscar2.jpg').default,require('src/assets/images/horses/oscar3.jpg').default],
        text: ['horses.oscar.copy1']
      }, {
        name: 'OLIVIA',
        breed: null,
        colour: 'horses.colours.grey',
        age: this.getAge(2011),
        height: '1.60m',
        images:[require('src/assets/images/horses/olivia1.jpg').default,require('src/assets/images/horses/olivia2.jpg').default,require('src/assets/images/horses/olivia3.jpg').default],
        text: ['horses.olivia.copy1','horses.olivia.copy2']
      }, {
        name: 'ELINA',
        breed: null,
        colour: 'horses.colours.chestnut',
        age: this.getAge(2012),
        height: '1.36m',
        images:[require('src/assets/images/horses/elina1.jpg').default,require('src/assets/images/horses/elina2.jpg').default,require('src/assets/images/horses/elina3.jpg').default],
        text: ['horses.elina.copy1','horses.elina.copy2']
      }, {
        name: 'ROSIE',
        breed: 'Thoroughbred/American saddlebred',
        colour: null,
        age: this.getAge(2014),
        height: '1.75m',
        images:[require('src/assets/images/horses/rosie1.jpg').default,require('src/assets/images/horses/rosie2.jpg').default,require('src/assets/images/horses/rosie3.jpg').default],
        text: ['horses.rosie.copy1','horses.rosie.copy2']
      }, {
        name: 'ANGEL',
        breed: 'Haflinger',
        colour: null,
        age: this.getAge(2011),
        height: '1.35m',
        images:[require('src/assets/images/horses/angel1.jpg').default,require('src/assets/images/horses/angel2.jpg').default,require('src/assets/images/horses/angel3.jpg').default,require('src/assets/images/horses/angel4.jpg').default],
        text: ['horses.angel.copy1','horses.angel.copy2']
      },
      {
        name: 'TITAN',
        breed: null,
        colour: 'horses.colours.black',
        age: this.getAge(2013),
        height: '1.60m',
        images: [require('src/assets/images/horses/titan1.jpg').default,require('src/assets/images/horses/titan2.jpg').default,require('src/assets/images/horses/titan3.jpg').default,require('src/assets/images/horses/titan4.jpg').default],
        text: ['horses.titan.copy1','horses.titan.copy2']
      }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
