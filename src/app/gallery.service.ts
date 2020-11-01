import { Injectable } from '@angular/core';
import { GalleryCategory, ImageOnCategory } from './components/gallery/gallery.component';
type CORSMethod = 'Anonymous' | 'User-Authenticated'

interface CategoryList {
  images: {src:string,size:[number, number]}[],
  category: string,
  title: string
}
@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }
  get categoryList(): CategoryList[] {
    return [
      {
        images: [],
        category: 'all',
        title: 'gallery.all'
      },
      {
        images: [
          {src:require('src/assets/images/gallery/lessons/lessons13.jpg').default,
          size: [1000, 667]},
          {src:require('src/assets/images/gallery/lessons/lessons11.jpg').default,
          size: [666, 1000]},
          {src:require('src/assets/images/gallery/lessons/lessons12.jpg').default,
          size:[1000, 666]},
          {src:require('src/assets/images/gallery/lessons/lessons10.jpg').default,
          size: [1000, 666]},
          {src:require('src/assets/images/gallery/lessons/lessons8.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/lessons/lessons9.jpg').default,
          size: [1000,667]},
          {src:require('src/assets/images/gallery/lessons/lessons7.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/lessons/lessons5.jpg').default,
          size: [1000,667]},
          {src:require('src/assets/images/gallery/lessons/lessons6.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/lessons/lessons4.jpg').default,
          size: [1000,667]},
          {src:require('src/assets/images/gallery/lessons/lessons3.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/lessons/lessons2.jpg').default,
          size: [666,1000]},
          {src:require('src/assets/images/gallery/lessons/lessons1.jpg').default,
          size: [1000,750]}
        ],
        category: 'lessons',
        title: 'gallery.lessons'
      },
      {
        images: [
          {src:require('src/assets/images/gallery/treks/treks1.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/treks/treks2.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/treks/treks3.jpg').default,
          size: [666,1000]},
          {src:require('src/assets/images/gallery/treks/treks4.jpg').default,
          size: [666,1000]},
          {src:require('src/assets/images/gallery/treks/treks5.jpg').default,
          size: [1000,667]},
          {src:require('src/assets/images/gallery/treks/treks6.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/treks/treks7.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/treks/treks8.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/treks/treks9.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/treks/treks10.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/treks/treks11.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/treks/treks12.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/treks/treks13.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/treks/treks14.jpg').default,
          size: [666,1000]},
          {src:require('src/assets/images/gallery/treks/treks15.jpg').default,
          size: [1000,667]}
        ],
        category: 'treks',
        title: 'gallery.treks'
      },
      {
        images:[
          {src:require('src/assets/images/gallery/photoshoots/galleryphotoshoots1.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/photoshoots/galleryphotoshoots2.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/photoshoots/galleryphotoshoots3.jpg').default,
          size: [666,1000]},
          {src:require('src/assets/images/gallery/photoshoots/galleryphotoshoots4.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/photoshoots/galleryphotoshoots6.jpg').default,
          size: [1000,667]}
        ],
        category:'photoshoots',
        title:'gallery.photoshoots'
      },
      {
        images: [
          {src:require('src/assets/images/gallery/horseshow/horseshow10.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/horseshow/horseshow9.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/horseshow/horseshow8.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/horseshow/horseshow5.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/horseshow/horseshow6.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/horseshow/horseshow7.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/horseshow/horseshow4.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/horseshow/horseshow3.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/horseshow/horseshow2.jpg').default,
          size: [1000,666]},
          {src:require('src/assets/images/gallery/horseshow/horseshow1.jpg').default,
          size: [1000,666]}
        ],
        category: 'horseshow',
        title: 'gallery.horseshow'
      },
      {
        images: [
          {src:require('src/assets/images/gallery/carriage/gallerycarriage5.jpg').default,
          size: [899,1000]},
          {src:require('src/assets/images/gallery/carriage/gallerycarriage2.jpg').default,
          size: [1000,454]},
          {src:require('src/assets/images/gallery/carriage/gallerycarriage3.jpg').default,
          size: [1000,749]},
          {src:require('src/assets/images/gallery/carriage/gallerycarriage4.jpg').default,
          size: [1000,667]},
          {src:require('src/assets/images/gallery/carriage/gallerycarriage1.jpg').default,
          size: [1000,750]}
        ],
        category: 'carriag',
        title: 'gallery.carriage'
      }
    ]
  }
  get categories(): GalleryCategory[] {
    return this.categoryList.map(({ title, category: value }) => {
      return { title, value }
    })
  }
  get getImages(): ImageOnCategory[] {
    const imagesFromCategory = this.categoryList.map(({ images, category }) => {
      return images.map((image,index) => { return { ...image, category: category, order:index } });
    })
    return ([]).concat(...imagesFromCategory)
      .sort((a,b)=>a.order-b.order);
  }
  public async computeImageDimensionsFromFile(imageSrc: string): Promise<[number, number]> {
    const image = await this.fetchImage(imageSrc)
    return [image.naturalWidth, image.naturalHeight]
  }
  public async fetchImage(url: string, cors: CORSMethod = null): Promise<HTMLImageElement> {
    const cachedImageElement = this.fetchedImages.get(url)
    if (cachedImageElement) {
      return cachedImageElement
    }

    const fetchedImageElement = await this.fetchImageElement(url, cors)
    this.fetchedImages.set(url, fetchedImageElement)
    return fetchedImageElement
  }
  private readonly fetchedImages = new Map<string, HTMLImageElement>()

  private readonly fetchImageElement = (src: string, cors: CORSMethod = null) => new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image()
    image.onload = () => resolve(image)
    image.onerror = reject
    image.crossOrigin = cors
    image.src = src
  })
}