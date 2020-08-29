import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {

  thankyouCopy:string[] = ['thankYou.copy1'];
  constructor(
    private readonly language: LanguageService
  ) { }

  ngOnInit(): void {
  }

}
