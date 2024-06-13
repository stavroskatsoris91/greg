import { Component, OnInit } from "@angular/core";
import { IHorse } from "./horses";
@Component({
  selector: "app-horses",
  templateUrl: "./horses.component.html",
  styleUrls: ["./horses.component.scss"],
})
export class HorsesComponent implements OnInit {
  now = new Date().getFullYear();
  private getAge(year) {
    return this.now - year;
  }
  horses: IHorse[] = [
    {
      name: "REBECCA",
      breed: null,
      colour: "horses.colours.chestnut",
      age: this.getAge(2003),
      height: "1.35m",
      images: [
        {
          src: "./assets/images/horses/rebecca1.jpg",
          description: "image.horse.rebecca1",
        },
        {
          src: "./assets/images/horses/rebecca2.jpg",
          description: "image.horse.rebecca2",
        },
        {
          src: "./assets/images/horses/rebecca3.jpg",
          description: "image.horse.rebecca3",
        },
        {
          src: "./assets/images/horses/rebecca4.jpg",
          description: "image.horse.rebecca4",
        },
      ],
      text: ["horses.rebecca.copy1", "horses.rebecca.copy2"],
    },
    {
      name: "ROBBIE",
      breed: "horses.breeds.haflinger",
      colour: null,
      age: this.getAge(2009),
      height: "1.50m",
      images: [
        {
          src: "./assets/images/horses/robbie1.jpg",
          description: "image.horse.robbie1",
        },
        {
          src: "./assets/images/horses/robbie2.jpg",
          description: "image.horse.robbie2",
        },
        {
          src: "./assets/images/horses/robbie3.jpg",
          description: "image.horse.robbie3",
        },
        {
          src: "./assets/images/horses/robbie4.jpg",
          description: "image.horse.robbie4",
        },
        {
          src: "./assets/images/horses/robbie5.jpg",
          description: "image.horse.robbie5",
        },
        {
          src: "./assets/images/horses/robbie6.jpg",
          description: "image.horse.robbie6",
        },
      ],
      text: ["horses.robbie.copy1"],
    },
    {
      name: "NELLY",
      breed: "horses.breeds.cob",
      colour: null,
      age: this.getAge(2009),
      height: "1.45m",
      images: [
        {
          src: "./assets/images/horses/nelly1.jpg",
          description: "image.horse.nelly1",
        },
        {
          src: "./assets/images/horses/nelly2.jpg",
          description: "image.horse.nelly2",
        },
        {
          src: "./assets/images/horses/nelly3.jpg",
          description: "image.horse.nelly3",
        },
        {
          src: "./assets/images/horses/nelly4.jpg",
          description: "image.horse.nelly4",
        },
        {
          src: "./assets/images/horses/nelly5.jpg",
          description: "image.horse.nelly5",
        },
      ],
      text: ["horses.nelly.copy1"],
    },
    {
      name: "OSCAR",
      breed: "horses.breeds.pinto",
      colour: null,
      age: this.getAge(2009),
      height: "1.40m",
      images: [
        {
          src: "./assets/images/horses/oscar1.jpg",
          description: "image.horse.oscar1",
        },
        {
          src: "./assets/images/horses/oscar2.jpg",
          description: "image.horse.oscar2",
        },
        {
          src: "./assets/images/horses/oscar3.jpg",
          description: "image.horse.oscar3",
        },
        {
          src: "./assets/images/horses/oscar4.jpg",
          description: "image.horse.oscar4",
        },
        {
          src: "./assets/images/horses/oscar5.jpg",
          description: "image.horse.oscar5",
        }
      ],
      text: ["horses.oscar.copy1"],
    },
    {
      name: "OLIVIA",
      breed: null,
      colour: "horses.colours.grey",
      age: this.getAge(2011),
      height: "1.60m",
      images: [
        {
          src: "./assets/images/horses/olivia1.jpg",
          description: "image.horse.olivia1",
        },
        {
          src: "./assets/images/horses/olivia2.jpg",
          description: "image.horse.olivia2",
        },
        {
          src: "./assets/images/horses/olivia3.jpg",
          description: "image.horse.olivia3",
        },
        {
          src: "./assets/images/horses/olivia4.jpg",
          description: "image.horse.olivia4",
        },
      ],
      text: ["horses.olivia.copy1", "horses.olivia.copy2"],
    },
    {
      name: "ELINA",
      breed: null,
      colour: "horses.colours.chestnut",
      age: this.getAge(2012),
      height: "1.36m",
      images: [
        {
          src: "./assets/images/horses/elina1.jpg",
          description: "image.horse.elina1",
        },
        {
          src: "./assets/images/horses/elina2.jpg",
          description: "image.horse.elina2",
        },
        {
          src: "./assets/images/horses/elina3.jpg",
          description: "image.horse.elina3",
        },
      ],
      text: ["horses.elina.copy1", "horses.elina.copy2"],
    },
    {
      name: "ROSIE",
      breed: "Thoroughbred/American saddlebred",
      colour: null,
      age: this.getAge(2014),
      height: "1.75m",
      images: [
        {
          src: "./assets/images/horses/rosie1.jpg",
          description: "image.horse.rosie1",
        },
        {
          src: "./assets/images/horses/rosie2.jpg",
          description: "image.horse.rosie2",
        },
        {
          src: "./assets/images/horses/rosie3.jpg",
          description: "image.horse.rosie3",
        },
      ],
      text: ["horses.rosie.copy1", "horses.rosie.copy2"],
    },
    {
      name: "ANGEL",
      breed: "horses.breeds.haflinger",
      colour: null,
      age: this.getAge(2011),
      height: "1.35m",
      images: [
        {
          src: "./assets/images/horses/angel1.jpg",
          description: "image.horse.angel1",
        },
        {
          src: "./assets/images/horses/angel2.jpg",
          description: "image.horse.angel2",
        },
        {
          src: "./assets/images/horses/angel3.jpg",
          description: "image.horse.angel3",
        },
        {
          src: "./assets/images/horses/angel4.jpg",
          description: "image.horse.angel4",
        },
        {
          src: "./assets/images/horses/angel5.jpg",
          description: "image.horse.angel5",
        },
      ],
      text: ["horses.angel.copy1", "horses.angel.copy2"],
    },
    {
      name: "TITAN",
      breed: "horses.breeds.murgese",
      colour: null,
      age: this.getAge(2013),
      height: "1.60m",
      images: [
        {
          src: "./assets/images/horses/titan1.jpg",
          description: "image.horse.titan1",
        },
        {
          src: "./assets/images/horses/titan2.jpg",
          description: "image.horse.titan2",
        },
        {
          src: "./assets/images/horses/titan3.jpg",
          description: "image.horse.titan3",
        },
        {
          src: "./assets/images/horses/titan4.jpg",
          description: "image.horse.titan4",
        },
        {
          src: "./assets/images/horses/titan5.jpg",
          description: "image.horse.titan5",
        },
      ],
      text: ["horses.titan.copy1", "horses.titan.copy2"],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
