import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {

  get copy (){
    return this.language.instructos;
  }
  constructor(
    private readonly language: LanguageService
  ) { }

  ngOnInit(): void {
  }

}
