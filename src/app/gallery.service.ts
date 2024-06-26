import { Injectable } from '@angular/core';
import {
  GalleryCategory,
  ImageOnCategory,
} from './components/gallery/gallery.component';
import { LoadImagesService } from './load-images.service';

interface CategoryList {
  images: { src: string; alt: string; size: [number, number] }[];
  category: string;
  title: string;
}
@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(
    private readonly loadImages: LoadImagesService
  ) {}
  get categoryList(): CategoryList[] {
    return [
      {
        images: [],
        category: 'all',
        title: 'gallery.all',
      },
      {
        images: [
          {
            src: './assets/images/gallery/lessons/lessons13.jpg',
            alt: 'trotting lessons, by mikok90',
            size: [1000, 667],
          },
          {
            src: './assets/images/gallery/lessons/lessons11.jpg',
            alt: 'teacher giving instructions to a young girl, by mikok90',
            size: [666, 1000],
          },
          {
            src: './assets/images/gallery/lessons/lessons12.jpg',
            alt: 'young girl having horse riding lessons, by mikok90',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/lessons/lessons10.jpg',
            alt: 'woman having horse riding lessons, by mikok90',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/lessons/lessons8.jpg',
            alt: 'young girl climb onto the horse, by mikok90',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/lessons/lessons9.jpg',
            alt: 'horse riding lessons landscape view, by mikok90',
            size: [1000, 667],
          },
          {
            src: './assets/images/gallery/lessons/lessons7.jpg',
            alt: 'young girl pets horse, by mikok90',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/lessons/lessons5.jpg',
            alt: 'horse riding with a view on the sea, by mikok90',
            size: [1000, 667],
          },
          {
            src: './assets/images/gallery/lessons/lessons6.jpg',
            alt: 'kid\'s first steps of horse riding, by mikok90',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/lessons/lessons4.jpg',
            alt: 'teaching a kid to familiarise with a horse, by mikok90',
            size: [1000, 667],
          },
          {
            src: './assets/images/gallery/lessons/lessons3.jpg',
            alt: 'group horse riding lessons, by mikok90',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/lessons/lessons2.jpg',
            alt: 'young girl riding a horse, by mikok90',
            size: [666, 1000],
          },
          {
            src: './assets/images/gallery/lessons/lessons1.jpg',
            alt: 'girl pets a horse, by mikok90',
            size: [1000, 750],
          },
        ],
        category: 'lessons',
        title: 'gallery.lessons',
      },
      {
        images: [
          {
            src: './assets/images/gallery/treks/treks1.jpg',
            alt: 'horse trek in the forest, by mikok90',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/treks/treks2.jpg',
            alt: 'horse trek on a cloudy day, by mikok90',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/treks/treks3.jpg',
            alt: 'horse ridding in the forest, rear view, by mikok90',
            size: [666, 1000],
          },
          {
            src: './assets/images/gallery/treks/treks4.jpg',
            alt: 'horse ridding alongsit',
            size: [666, 1000],
          },
          {
            src: './assets/images/gallery/treks/treks5.jpg',
            alt: '',
            size: [1000, 667],
          },
          {
            src: './assets/images/gallery/treks/treks6.jpg',
            alt: '',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/treks/treks7.jpg',
            alt: '',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/treks/treks8.jpg',
            alt: '',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/treks/treks9.jpg',
            alt: '',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/treks/treks10.jpg',
            alt: '',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/treks/treks11.jpg',
            alt: '',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/treks/treks12.jpg',
            alt: '',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/treks/treks13.jpg',
            alt: '',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/treks/treks14.jpg',
            alt: '',
            size: [666, 1000],
          },
          {
            src: './assets/images/gallery/treks/treks15.jpg',
            alt: '',
            size: [1000, 667],
          },
        ],
        category: 'treks',
        title: 'gallery.treks',
      },
      {
        images: [
          {
            src: './assets/images/gallery/photoshoots/galleryphotoshoots1.jpg',
            alt: '',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/photoshoots/galleryphotoshoots2.jpg',
            alt: '',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/photoshoots/galleryphotoshoots3.jpg',
            alt: '',
            size: [666, 1000],
          },
          {
            src: './assets/images/gallery/photoshoots/galleryphotoshoots4.jpg',
            alt: '',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/photoshoots/galleryphotoshoots6.jpg',
            alt: '',
            size: [1000, 667],
          },
        ],
        category: 'photoshoots',
        title: 'gallery.photoshoots',
      },
      {
        images: [
          {
            src: './assets/images/gallery/horseshow/horseshow10.jpg',
            alt: '',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/horseshow/horseshow9.jpg',
            alt: '',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/horseshow/horseshow8.jpg',
            alt: '',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/horseshow/horseshow5.jpg',
            alt: '',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/horseshow/horseshow6.jpg',
            alt: '',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/horseshow/horseshow7.jpg',
            alt: '',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/horseshow/horseshow4.jpg',
            alt: '',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/horseshow/horseshow3.jpg',
            alt: '',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/horseshow/horseshow2.jpg',
            alt: '',
            size: [1000, 666],
          },
          {
            src: './assets/images/gallery/horseshow/horseshow1.jpg',
            alt: '',
            size: [1000, 666],
          },
        ],
        category: 'horseshow',
        title: 'gallery.horseshow',
      },
      {
        images: [
          {
            src: './assets/images/gallery/carriage/gallerycarriage5.jpg',
            alt: '',
            size: [899, 1000],
          },
          {
            src: './assets/images/gallery/carriage/gallerycarriage2.jpg',
            alt: '',
            size: [1000, 750],
          },
          {
            src: './assets/images/gallery/carriage/gallerycarriage3.jpg',
            alt: '',
            size: [1000, 749],
          },
          {
            src: './assets/images/gallery/carriage/gallerycarriage4.jpg',
            alt: '',
            size: [1000, 667],
          },
          {
            src: './assets/images/gallery/carriage/gallerycarriage1.jpg',
            alt: '',
            size: [1000, 750],
          },
          {
            src: './assets/images/gallery/carriage/gallerycarriage6.jpg',
            alt: '',
            size: [749, 1000],
          },
          {
            src: './assets/images/carriage/carriage6.jpg',
            alt: '',
            size: [1498, 1000],
          },
          {
            src: './assets/images/gallery/carriage/gallerycarriage7.jpg',
            alt: '',
            size: [668, 1000],
          }
        ],
        category: 'carriag',
        title: 'gallery.carriage',
      },
    ];
  }
  get categories(): GalleryCategory[] {
    return this.categoryList.map(({ title, category: value }) => {
      return { title, value };
    });
  }
  get getImages(): ImageOnCategory[] {
    const imagesFromCategory = this.categoryList.map(({ images, category }) => {
      return images.map((image, index) => {
        return { ...image, category: category, order: index };
      });
    });
    return [].concat(...imagesFromCategory).sort((a, b) => a.order - b.order);
  }
  public async computeImageDimensionsFromFile(
    imageSrc: string
  ): Promise<[number, number]> {
    const image = await this.loadImages.fetchImage(imageSrc);
    return [image.naturalWidth, image.naturalHeight];
  }

}