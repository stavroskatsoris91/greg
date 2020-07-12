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
        colour: 'Chestnut',
        age: this.getAge(2003)+' years old',
        height: '1.35m',
        images: [require('src/assets/images/horses/rebecca1.jpg'),require('src/assets/images/horses/rebecca2.jpg'),require('src/assets/images/horses/rebecca3.jpg'),require('src/assets/images/horses/rebecca4.jpg')],
        text: ['Rebecca is the smallest but the head of the herd, she\'s the boss!',
          'She has a strong character, she pulls faces at the other horses to remind them of their place. She is a very safe and relaxed horse. She loves children, she has so much patience and really looks after her rider.']
      }, {
        name: 'ROBBIE',
        breed: 'Haflinger',
        colour: null,
        age: this.getAge(2009)+' years old',
        height: '1.50m',
        images:[require('src/assets/images/horses/robbie1.jpg'),require('src/assets/images/horses/robbie2.jpg'),require('src/assets/images/horses/robbie3.jpg'),require('src/assets/images/horses/robbie4.jpg'),require('src/assets/images/horses/robbie5.jpg')],
        text: ['Robbie is the gentleman of the family, when Robbie first arrived he was a very unconfident horse, non of the mares like him, which didn\'t help! Throughout his training his true character shone through. He loves his rubs and wants lots of attention. He really enjoys his treks and is a content, safe horse.']
      },
      {
        name: 'NELLY',
        breed: 'Cob',
        colour: null,
        age: this.getAge(2009)+' years old',
        height: '1.45m',
        images:[require('src/assets/images/horses/nelly1.jpg'),require('src/assets/images/horses/nelly2.jpg'),require('src/assets/images/horses/nelly3.jpg'),require('src/assets/images/horses/nelly4.jpg')],
        text: ['Nelly is a roan characterized by the white hairs intermingled throughout her bay coat. She has a very calm, quiet nature and is always keen to please her riders.']
      }, {
        name: 'OSCAR',
        breed: 'Pinto',
        colour: null,
        age: this.getAge(2009)+' years old',
        height: '1.40m',
        images:[require('src/assets/images/horses/oscar1.jpg'),require('src/assets/images/horses/oscar2.jpg'),require('src/assets/images/horses/oscar3.jpg')],
        text: ['Oscar has a fun, cheeky character and loves his treks. Many recognise Oscar as he was previously part of Harriet\'s team on Hydra.']
      }, {
        name: 'OLIVIA',
        breed: null,
        colour: 'Grey',
        age: this.getAge(2011)+' years old',
        height: '1.60m',
        images:[require('src/assets/images/horses/olivia1.jpg'),require('src/assets/images/horses/olivia2.jpg'),require('src/assets/images/horses/olivia3.jpg')],
        text: ['Olivia has been in our family since she was 3months old. She has a very inquisitive character, her curiosity is endless. She loves people and can never resist the chance to lick you.',
          'She is a relaxed horse but always very attentive to her rider.']
      }, {
        name: 'ELINA',
        breed: null,
        colour: 'Chestnut',
        age: this.getAge(2012)+' years old',
        height: '1.36m',
        images:[require('src/assets/images/horses/elina1.jpg'),require('src/assets/images/horses/elina2.jpg'),require('src/assets/images/horses/elina3.jpg')],
        text: ['Elina is Rebecca’s youngest daughter.',
          'She was a complete surprise, we had no idea Rebecca was in foal again when she arrived.']
      }, {
        name: 'ROSIE',
        breed: 'Thoroughbred/American saddlebred',
        colour: null,
        age: this.getAge(2014)+' years old',
        height: '1.75m',
        images:[require('src/assets/images/horses/rosie1.jpg'),require('src/assets/images/horses/rosie2.jpg'),require('src/assets/images/horses/rosie3.jpg')],
        text: ['Rosie is a dark bay Thoroughbred/American saddlebred.',
          'She’s the youngest of our family, she was born in our stables and she recently started her riding training.']
      }, {
        name: 'ANGEL',
        breed: 'Haflinger',
        colour: null,
        age: this.getAge(2011)+' years old',
        height: '1.35m',
        images:[require('src/assets/images/horses/angel1.jpg'),require('src/assets/images/horses/angel2.jpg'),require('src/assets/images/horses/angel3.jpg'),require('src/assets/images/horses/angel4.jpg')],
        text: ['Angel is Chestnut with a distinctive blonde mane. She is part Haflinger. Angel is Rebecca\'s daughter.',
          'She became part of our family when she was 2.5 months old. She is in the process of being trained to join us on our rides.']
      },
      {
        name: 'TITAN',
        breed: null,
        colour: 'black',
        age: this.getAge(2013)+' years old',
        height: '1.60m',
        images: [require('src/assets/images/horses/titan1.jpg'),require('src/assets/images/horses/titan2.jpg'),require('src/assets/images/horses/titan3.jpg'),require('src/assets/images/horses/titan4.jpg')],
        text: ['Titan is the new member of our family. He\'s a dark bay gelding.',
          'He has been sweet, calm and relaxed since the day he arrived. He\'s proving to be brave and fearless on our treks and seems to really connect with his riders.']
      }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
