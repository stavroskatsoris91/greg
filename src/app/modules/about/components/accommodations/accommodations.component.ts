import { ModalService } from './../../../../services/modal.service';
import { Component, OnInit } from '@angular/core';
import * as kalomira from "src/assets/images/villakalomira.jpg";

@Component({
  selector: 'app-accommodations',
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.scss']
})
export class AccommodationsComponent implements OnInit {

  kalomiraImage = kalomira.default;
  constructor(private readonly modalService: ModalService) { }

  ngOnInit(): void {
  }
public showModal(pos) {
    const list = [{ img: this.kalomiraImage }];
    this.modalService.triggerEvent({list, position:0});
  };
}
