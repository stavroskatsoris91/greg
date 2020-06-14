import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  left = '<';
  right = '>';
  index = 0;
  group: any =null;
  constructor(private ModalService: ModalService) { }

  ngOnInit(): void {
    this.ModalService.listenEvent().subscribe((ev)=>{
      let data = ev[0];
      let pos = ev[1];
      this.index = pos||0;
      this.group = data;
    })
  }
  public prev(){
    this.index = window.Math.max(0, this.index-1);
  };
  public next(){
    this.index = window.Math.min(this.index+1,this.group.length-1);
  };
}
