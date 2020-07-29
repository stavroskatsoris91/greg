import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.scss']
})
export class SafetyComponent implements OnInit {

  safety = this.language.safety.safety;
  constructor(private readonly language: LanguageService) { }

  ngOnInit(): void {
  }

}
