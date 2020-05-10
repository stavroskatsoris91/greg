import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {

  thankyou = {
    title:'Thank you!',
    text:[
      'We will be in contact with you shortly 😊'
      ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
