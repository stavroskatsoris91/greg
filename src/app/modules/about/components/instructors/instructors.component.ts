import { Component, OnInit } from "@angular/core";
import * as greg from "src/assets/images/greg.jpg";
import * as kat from "src/assets/images/kat.jpg";
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: "app-instructors",
  templateUrl: "./instructors.component.html",
  styleUrls: ["./instructors.component.scss"],
})
export class InstructorsComponent implements OnInit {
  gregImage = greg.default;
  katImage = kat.default;
  instructors = [
    {
      image: greg.default,
      about: "greg",
    },
    {
      image: null,
      about: "tracy",
    },
    {
      image: null,
      about: "katerina",
    }
  ];
  constructor(
    private readonly modalService: ModalService
  ) {}

  ngOnInit(): void {}

  public showModal(pos) {
    var list = this.instructors.map((instructor) => {
      return { img: instructor.image };
    }).filter((image)=>image.img);
    this.modalService.triggerEvent({list, position:pos});
  };
}
