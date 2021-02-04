import { Component, OnInit } from '@angular/core';
import * as trekMap from 'src/assets/images/treks/trek_map.png';

@Component({
  selector: 'app-trek-map',
  templateUrl: './trek-map.component.html',
  styleUrls: ['./trek-map.component.scss']
})
export class TrekMapComponent implements OnInit {
  
  public trekMap = trekMap.default;
  public readonly description: string = 'image.trek.map'
  constructor() { }

  ngOnInit(): void {
  }
}
