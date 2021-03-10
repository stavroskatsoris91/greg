import { Injectable } from "@angular/core";

interface IBackgroundImage {
  name: string;
  images: any[];
  alt: string;
}

@Injectable({
  providedIn: "root",
})
export class BackgroundService {
  constructor() {}

  public get getBackgrounds(): IBackgroundImage[] {
    return [
      {
        name: "",
        images: [
          require("src/assets/images/background/home.jpg").default,
          require("src/assets/images/background/homemob.jpg").default,
        ],
        alt:
          "image.background.home",
      },
      {
        name: "about",
        images: [
          require("src/assets/images/background/about.jpg").default,
          require("src/assets/images/background/aboutmob.jpg").default,
        ],
        alt: "image.background.about",
      },
      {
        name: "instructors",
        images: [
          require("src/assets/images/background/about.jpg").default,
          require("src/assets/images/background/aboutmob.jpg").default,
        ],
        alt: "image.background.about",
      },
      {
        name: "horses",
        images: [
          require("src/assets/images/background/horses.jpg").default,
          require("src/assets/images/background/horsesmob.jpg").default,
        ],
        alt: "image.background.horses",
      },
      {
        name: "treks",
        images: [
          require("src/assets/images/background/treks.jpg").default,
          require("src/assets/images/background/treksmob.jpg").default,
        ],
        alt: "",
      },
      {
        name: "carriage",
        images: [
          require("src/assets/images/background/carriage.jpg").default,
          require("src/assets/images/background/carriagemob.jpg").default,
        ],
        alt: "",
      },
      {
        name: "gallery",
        images: [
          require("src/assets/images/background/gallery.jpg").default,
          require("src/assets/images/background/gallerymob.jpg").default,
        ],
        alt: "",
      },
      {
        name: "contact/booking",
        images: [
          require("src/assets/images/background/contact.jpg").default,
          require("src/assets/images/background/contactmob.jpg").default,
        ],
        alt: "",
      },
      {
        name: "thankyou",
        images: [
          require("src/assets/images/background/contact.jpg").default,
          require("src/assets/images/background/contactmob.jpg").default,
        ],
        alt: "",
      },
      {
        name: "lessons",
        images: [
          require("src/assets/images/background/lessons.jpg").default,
          require("src/assets/images/background/lessonsmob.jpg").default,
        ],
        alt: "",
      },
      {
        name: "photoshoots",
        images: [
          require("src/assets/images/background/photoshoots.jpg").default,
          require("src/assets/images/background/photoshootsmob.jpg").default,
        ],
        alt: "",
      },
      {
        name: "picnics",
        images: [
          require("src/assets/images/background/picnics.jpg").default,
          require("src/assets/images/background/picnicsmob.jpg").default,
        ],
        alt: "",
      },
      {
        name: "safety",
        images: [
          require("src/assets/images/background/safety.jpg").default,
          require("src/assets/images/background/safetymob.jpg").default,
        ],
        alt: "",
      },
    ];
  }
}
