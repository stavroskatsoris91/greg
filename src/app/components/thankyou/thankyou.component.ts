import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {

  thankyouCopy:string[] = ['thankYou.copy1'];
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
