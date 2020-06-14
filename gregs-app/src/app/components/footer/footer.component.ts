import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  title:string = 'Where to Find Us';
  location:string = 'Spetses, 180 50';
  show:boolean = false;
  openMap:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
}
