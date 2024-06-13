import { Injectable } from '@angular/core';

interface IBackgroundImage {
  name: string;
  images: any[];
  alt: string;
}

@Injectable({
  providedIn: 'root',
})
export class BackgroundService {
  constructor() {}

  public get getBackgrounds(): IBackgroundImage[] {
    return [
      {
        name: '',
        images: [
          './assets/images/background/home.jpg',
          './assets/images/background/homemob.jpg',
        ],
        alt:
          'image.background.home',
      },
      {
        name: 'about/story',
        images: [
          './assets/images/background/aboutus.jpg',
          './assets/images/background/aboutusmob.jpg',
        ],
        alt: 'image.background.about',
      },
      {
        name: 'about/instructors',
        images: [
          './assets/images/background/instructors.jpg',
          './assets/images/background/instructorsmob.jpg',
        ],
        alt: 'image.background.about',
      },
      {
        name: 'about/horses',
        images: [
          './assets/images/background/horses.jpg',
          './assets/images/background/horsesmob.jpg',
        ],
        alt: 'image.background.horses',
      },
      {
        name: 'about/safety',
        images: [
          './assets/images/background/safety.jpg',
          './assets/images/background/safetymob.jpg',
        ],
        alt: '',
      },
      {
        name: 'about/accommodations',
        images: [
          './assets/images/background/safety.jpg',
          './assets/images/background/safetymob.jpg',
        ],
        alt: '',
      },
      {
        name: 'activities/treks',
        images: [
          './assets/images/background/treks.jpg',
          './assets/images/background/treksmob.jpg',
        ],
        alt: '',
      },
      {
        name: 'activities/carriage',
        images: [
          './assets/images/background/carriage.jpg',
          './assets/images/background/carriagemob.jpg',
        ],
        alt: '',
      },
      {
        name: 'gallery',
        images: [
          './assets/images/background/gallery.jpg',
          './assets/images/background/gallerymob.jpg',
        ],
        alt: '',
      },
      {
        name: 'contact/booking',
        images: [
          './assets/images/background/contact.jpg',
          './assets/images/background/contactmob.jpg',
        ],
        alt: '',
      },
      {
        name: 'contact/message',
        images: [
          './assets/images/background/message.jpg',
          './assets/images/background/messagemob.jpg',
        ],
        alt: '',
      },
      {
        name: 'contact/thankyou',
        images: [
          './assets/images/background/contact.jpg',
          './assets/images/background/contactmob.jpg',
        ],
        alt: '',
      },
      {
        name: 'activities/lessons',
        images: [
          './assets/images/background/lessons.jpg',
          './assets/images/background/lessonsmob.jpg',
        ],
        alt: '',
      },
      {
        name: 'activities/photoshoots',
        images: [
          './assets/images/background/photoshoots.jpg',
          './assets/images/background/photoshootsmob.jpg',
        ],
        alt: '',
      },
      {
        name: 'activities/picnics',
        images: [
          './assets/images/background/picnics.jpg',
          './assets/images/background/picnicsmob.jpg',
        ],
        alt: '',
      },
    ];
  }
}
