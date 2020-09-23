import { Injectable } from '@angular/core';
import { GalleryCategory, ImageOnCategory } from './components/gallery/gallery.component';
type CORSMethod = 'Anonymous' | 'User-Authenticated'
@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }
  get categories():GalleryCategory[]{
    return [
      {title:'gallery.all',value:'all'},
      {title:'gallery.lessons',value:'lessons'},
      {title:'gallery.treks',value:'treks'},
      {title:'gallery.photoshoots',value:'photoshoots'},
      {title:'gallery.horseshow',value:'horseshow'},
      {title:'gallery.carriage',value:'carriage'},
      ];
  }
  get getImages():ImageOnCategory[] {
    return [
      {
        src:require('src/assets/images/gallery/gallery1.jpg').default,
        category:'treks'
      },
      {
        src:require('src/assets/images/gallery/gallery2.jpg').default,
        category:'treks'
      },
      {
        src:require('src/assets/images/gallery/gallery3.jpg').default,
        category:'lessons'
      },
      {
        src:require('src/assets/images/gallery/gallery4.jpg').default,
        category:'treks'
      },
      {
        src:require('src/assets/images/gallery/gallery5.jpg').default,
        category:'lessons'
      },
      {
        src:require('src/assets/images/gallery/gallery6.jpg').default,
        category:'photoshoots'
      },
      {
        src:require('src/assets/images/gallery/gallery7.jpg').default,
        category:'treks'
      },
      {
        src:require('src/assets/images/gallery/gallery8.jpg').default,
        category:'lessons'
      },
      {
        src:require('src/assets/images/gallery/gallery9.jpg').default,
        category:'treks'
      },
      {
        src:require('src/assets/images/gallery/gallery10.jpg').default,
        category:'treks'
      },
      {
        src:require('src/assets/images/gallery/gallery11.jpg').default,
        category:'lessons'
      },
      {
        src:require('src/assets/images/gallery/gallery12.jpg').default,
        category:'treks'
      },
      {
        src:require('src/assets/images/gallery/gallery13.jpg').default,
        category:'photoshoots'
      },
      {
        src:require('src/assets/images/gallery/gallery14.jpg').default,
        category:'lessons'
      },
      {
        src:require('src/assets/images/gallery/gallery15.jpg').default,
        category:'lessons'
      },
      {
        src:require('src/assets/images/gallery/gallery16.jpg').default,
        category:'lessons'
      },
      {
        src:require('src/assets/images/gallery/gallery17.jpg').default,
        category:'photoshoots'
      },
      {
        src:require('src/assets/images/gallery/gallery18.jpg').default,
        category:'photoshoots'
      },
      {
        src:require('src/assets/images/gallery/gallery19.jpg').default,
        category:'treks'
      },
      {
        src:require('src/assets/images/gallery/gallery20.jpg').default,
        category:'lessons'
      },
      {
        src:require('src/assets/images/gallery/gallery21.jpg').default,
        category:'lessons'
      },
      {
        src:require('src/assets/images/gallery/gallery22.jpg').default,
        category:'lessons'
      },
      {
        src:require('src/assets/images/gallery/gallery23.jpg').default,
        category:'treks'
      },
      {
        src:require('src/assets/images/gallery/gallery24.jpg').default,
        category:'treks'
      },
      {
        src:require('src/assets/images/gallery/gallery25.jpg').default,
        category:'treks'
      },
      {
        src:require('src/assets/images/gallery/gallery26.jpg').default,
        category:'treks'
      },
      {
        src:require('src/assets/images/gallery/gallery27.jpg').default,
        category:'lessons'
      },
      {
        src:require('src/assets/images/gallery/gallery28.jpg').default,
        category:'lessons'
      }
    ]
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
