import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  title = this.language.lessons.title;
  lessons = this.language.lessons.lessons;
  extraInfo = this.language.lessons.extraInfo;
  lessonsPhotos = [
    {
      image: require('src/assets/images/lessons/lesson-1.jpg'),
      description: this.language.lessons.lessonPhotosInfo1
    },
    {
      image: require('src/assets/images/lessons/lesson-2.jpg'),
      description: this.language.lessons.lessonPhotosInfo2
    },
    {
      image: require('src/assets/images/lessons/lesson-3.jpg'),
      description: this.language.lessons.lessonPhotosInfo3
    },
    {
      image: require('src/assets/images/lessons/lesson-4.jpg'),
      description: this.language.lessons.lessonPhotosInfo4
    }
  ];
  constructor(private ModalService: ModalService,
    private readonly language: LanguageService) { }

  ngOnInit(): void {
  }
  showModal(pos) {
    var list = this.lessonsPhotos.map((x) => {
      return { img: x.image };
    });
    this.ModalService.triggerEvent([list, pos]);
  };
}
