import { Component, OnInit, ElementRef, Input, Renderer2 } from '@angular/core';
import { interval } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {
  @Input() list: any;
  count: number = 0;
  sides: any;
  loopInterval: any;
  head: boolean = false;

  constructor(private elementRef: ElementRef<any>,
    private renderer: Renderer2,
    private ModalService: ModalService) { }

  ngOnInit(): void {
    this.sides = this.list.slice(0, 2);
    this.loopInterval = interval(3500).subscribe(()=> {
      this.head = !this.head;
      this.count++;
      setTimeout(this.updateSides,1500);
    });
  }
  ngOnDestroy(): void {
    this.loopInterval.unsubscribe();
    
  }
  private updateSides = ()=> {
    var l = this.list.length;
    var rem = (this.count+1) % l;
    if(this.count%2===1){
      this.sides[0]=this.list[rem];
    }else{
      this.sides[1]=this.list[rem];
    }
  }
  public side(i) {
    return { 'background-image': 'url(' + this.sides[i] + ')' };
  };
  public showModal = function () {
    var list = this.list.map(function (x) {
      return { img: x };
    });
    this.ModalService.triggerEvent([list,0]);
  };
}