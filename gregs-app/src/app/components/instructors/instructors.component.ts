import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {

  instructors=[
    {
      name: 'GREG',
      color: 'red-1',
      description:'Greg is the owner of Greg’s Spetses Horses. He is half English and half Greek and he speaks both languages fluently. He has trained all of our horses. He likes to teach his students the importance of building a compassionate relationship between the rider and the horse. He’s the main trek guide and enjoys showing visitors the beautiful island he grew up in.'
    },
    {
      name: 'TRACY',
      color: 'yellow-3',
      description:'Tracy was born and raised in England and she has been living in Spetses for nearly 30 years. She’s fluent in English and Greek. She trained with the BHS in horsemanship and teaching. She loves to teach and see the progress of her students.'
    },
    {
      name: 'KATERINA',
      color: 'purple-3',
      description:'Katerina is Greek and was raised in Spetses. She’s fluent in English and Greek. She’s trained with Greg for the last four years. She is a riding instructress and a trek guide. She’s in the third year of studying for a degree in nursing.'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
