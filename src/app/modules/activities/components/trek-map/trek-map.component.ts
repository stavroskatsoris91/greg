import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trek-map',
  templateUrl: './trek-map.component.html',
  styleUrls: ['./trek-map.component.scss']
})
export class TrekMapComponent implements OnInit {
  
  public trekMap = './assets/images/treks/trek_map.png';
  public readonly description: string = 'image.trek.map'
  constructor() { }

  ngOnInit(): void {
  }
}
