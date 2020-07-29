import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {

  thankyou:{title:string,text:string[]} = {
    title:this.language.thankYou.title,
    text:this.language.thankYou.text
  };
  constructor(
    private readonly language: LanguageService
  ) { }

  ngOnInit(): void {
  }

}
