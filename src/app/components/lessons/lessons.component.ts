import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  lessons = ['lessons.lessons.copy1','lessons.lessons.copy2','lessons.lessons.copy3'];
  extraInfo = ['lessons.extraInfo.copy1','lessons.extraInfo.copy2'];
  lessonsPhotos = [
    {
      image: require('src/assets/images/lessons/lesson-1.jpg').default,
      description: 'lessons.lessonPhotos.copy1'
    },
    {
      image: require('src/assets/images/lessons/lesson-2.jpg').default,
      description:'lessons.lessonPhotos.copy2'
    },
    {
      image: require('src/assets/images/lessons/lesson-3.jpg').default,
      description: 'lessons.lessonPhotos.copy3'
    },
    {
      image: require('src/assets/images/lessons/lesson-4.jpg').default,
      description: 'lessons.lessonPhotos.copy4'
    }
  ];
  constructor(private ModalService: ModalService) { }

  ngOnInit(): void {
  }
  showModal(pos) {
    var list = this.lessonsPhotos.map((x) => {
      return { img: x.image };
    });
    this.ModalService.triggerEvent([list, pos]);
  };
}
