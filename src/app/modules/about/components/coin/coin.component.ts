import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';
import { IHorseImage } from '../horses/horses';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit, OnDestroy {
  @Input() list: IHorseImage[];
  count: number = 0;
  sides: IHorseImage[];
  loopInterval: any;
  head: boolean = false;

  constructor(
    private readonly modalService: ModalService) { }

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
    const l = this.list.length;
    const rem = (this.count+1) % l;
    if(this.count%2===1){
      this.sides[0]=this.list[rem];
    }else{
      this.sides[1]=this.list[rem];
    }
  }
  public side(i):string {
    return `url(${this.sides[i].src})`;
  };
  public showModal() {
    const list = this.list.map(function (x) {
      return { img: x.src };
    });
    const l = this.list.length;
    const rem = (this.count) % l;
    this.modalService.triggerEvent({list, position:rem});
  };
}