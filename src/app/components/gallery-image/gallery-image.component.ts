import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.scss']
})
export class GalleryImageComponent implements OnInit {

  @Input()
  public readonly top:number = 0;
  
  @Input()
  public readonly left:number = 0;

  @Input()
  public readonly width:number = 0;

  @Input()
  public readonly imageSrc:string = null;

  constructor() { }

  ngOnInit(): void {
  }

  get styleWidth(){
    return `${this.width}%`;
  }

  get styleTop(){
    return `${this.top}px`;
  }

  get styleLeft(){
    return `${this.left}px`;
  }
}
