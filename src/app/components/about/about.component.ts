import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  title =  this.language.about.title;
  about = this.language.about.copy;
  constructor(
    private readonly language: LanguageService
  ) { }

  ngOnInit(): void {
  }

}
