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
        name: "about/story",
        images: [
          require("src/assets/images/background/aboutus.jpg").default,
          require("src/assets/images/background/aboutusmob.jpg").default,
        ],
        alt: "image.background.about",
      },
      {
        name: "about/instructors",
        images: [
          require("src/assets/images/background/instructors.jpg").default,
          require("src/assets/images/background/instructorsmob.jpg").default,
        ],
        alt: "image.background.about",
      },
      {
        name: "about/horses",
        images: [
          require("src/assets/images/background/horses.jpg").default,
          require("src/assets/images/background/horsesmob.jpg").default,
        ],
        alt: "image.background.horses",
      },
      {
        name: "about/safety",
        images: [
          require("src/assets/images/background/safety.jpg").default,
          require("src/assets/images/background/safetymob.jpg").default,
        ],
        alt: "",
      },
      {
        name: "about/accommodations",
        images: [
          require("src/assets/images/background/safety.jpg").default,
          require("src/assets/images/background/safetymob.jpg").default,
        ],
        alt: "",
      },
      {
        name: "activities/treks",
        images: [
          require("src/assets/images/background/treks.jpg").default,
          require("src/assets/images/background/treksmob.jpg").default,
        ],
        alt: "",
      },
      {
        name: "activities/carriage",
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
        name: "contact/message",
        images: [
          require("src/assets/images/background/message.jpg").default,
          require("src/assets/images/background/messagemob.jpg").default,
        ],
        alt: "",
      },
      {
        name: "contact/thankyou",
        images: [
          require("src/assets/images/background/contact.jpg").default,
          require("src/assets/images/background/contactmob.jpg").default,
        ],
        alt: "",
      },
      {
        name: "activities/lessons",
        images: [
          require("src/assets/images/background/lessons.jpg").default,
          require("src/assets/images/background/lessonsmob.jpg").default,
        ],
        alt: "",
      },
      {
        name: "activities/photoshoots",
        images: [
          require("src/assets/images/background/photoshoots.jpg").default,
          require("src/assets/images/background/photoshootsmob.jpg").default,
        ],
        alt: "",
      },
      {
        name: "activities/picnics",
        images: [
          require("src/assets/images/background/picnics.jpg").default,
          require("src/assets/images/background/picnicsmob.jpg").default,
        ],
        alt: "",
      },
    ];
  }
}
