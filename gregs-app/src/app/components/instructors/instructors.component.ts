import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {

  instructors=[
    {
      name: 'Greg',
      color: 'red-1',
      description:'Greg is the owner of Greg’s Spetses Horses. He was raised in Spetses and he is half English, half Greek and speaks both languages fluently. Greg has trained all our horses and he is also the main performer in our new “Greg’s Spetses Horses” Show with his horse, Olivia. As an instructor, He likes to teach his students the importance of building a compassionate relationship with the horses they ride. He’s the trek guide and enjoys showing visitors the beautiful island he grew up in. Apart from our equestrian club, Greg also drives a beautiful horse drawn Victoria carriage which are traditional to the island.'
    },
    {
      name: 'Tracy',
      color: 'yellow-3',
      description:'Tracy was born and raised in England and she has been living in Spetses for nearly 30 years and speaks fluent both English and Greek. She trained with the British Horse Society in horsemanship and teaching. Tracy also enjoyed show jumping and cross country back in England. Being an instructor, she loves to teach and see the progress of her students.'
    },
    {
      name: 'Katerina',
      color: 'purple-3',
      description:'Katerina is Greek and was raised in Spetses. Growing up on a Greek island she started learning English from a young age and she is now fluent in both languages. She\'s been part of the Greg\'s Spetses Horses team from the beginning. She is a riding instructress, assists on treks and is administrator, taking care of the website, advertising and social media. Katerina performs in the “Greg’s Spetses Horses” show and she loves liberty training with her horse, Robbie. Apart from her love for horses, she’s in her third year of studying for a degree in nursing.'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
