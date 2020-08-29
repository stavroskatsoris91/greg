import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.scss']
})
export class SafetyComponent implements OnInit {

  safety = [
    {
      title:'safety.safety1.title',
      list:[
        'safety.safety1.list.row1',
        'safety.safety1.list.row2',
        'safety.safety1.list.row3',
        'safety.safety1.list.row4',
        'safety.safety1.list.row5',
        'safety.safety1.list.row6',
        'safety.safety1.list.row7'
      ],
      copy:['safety.safety1.copy1','safety.safety1.copy2']
    },
    {
      title:'safety.safety2.title',
      list:[
        'safety.safety2.list.row1',
        'safety.safety2.list.row2',
        'safety.safety2.list.row3',
        'safety.safety2.list.row4',
        'safety.safety2.list.row5',
        'safety.safety2.list.row6'
      ],
      copy:[]
    },];
  constructor(private readonly language: LanguageService) { }

  ngOnInit(): void {
  }

}
