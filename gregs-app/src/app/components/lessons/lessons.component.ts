import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  lessons=[
    'Choose a private lesson or come with friends (up to 3-4 riders). Or just try a little ride in our outdoors arena next to the sea view for only 12 euros!',
    'Lessons are arranged by appointment.',
    'Call or send us an email!'
  ];
extraInfo = [
  'Please arrive at least five minutes before your lesson start time. Lessons will not be extended if you are late as this will affect the following student.',
  'If upon arrival you decide you do not wish to ride you will be required to pay for the number of horses originally booked as they are prepared and saddled waiting specifically for you. (exception due to sickness)'
];
lessonsPhotos = [
  {
    image:'/images/lessons/lesson-1.jpg',
    description:'Fun grooming Robbie before the lesson'},
  {
    image:'/images/lessons/lesson-2.jpg',
    description:'Trotting on Robbie'},
  {
    image:'/images/lessons/lesson-3.jpg',
    description:'First steps learning to trot on Rebecca'},
  {
    image:'/images/lessons/lesson-4.jpg',
    description:'Our students dropping in to say hello to the horses'}
];
  constructor(private ModalService: ModalService) { }

  ngOnInit(): void {
  }
  showModal(pos) {
    var list = this.lessonsPhotos.map((x)=> {
      return { img: x.image };
    });
    this.ModalService.triggerEvent([list,pos]);
  };
}
