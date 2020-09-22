import { Injectable } from '@angular/core';
type CORSMethod = 'Anonymous' | 'User-Authenticated'
@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }
  public getImagesByTitle(title:string) {
    return [
      require('src/assets/images/gallery/gallery1.jpg').default,
      require('src/assets/images/gallery/gallery2.jpg').default,
      require('src/assets/images/gallery/gallery3.jpg').default,
      require('src/assets/images/gallery/gallery4.jpg').default,
      require('src/assets/images/gallery/gallery5.jpg').default,
      require('src/assets/images/gallery/gallery6.jpg').default,
      require('src/assets/images/gallery/gallery7.jpg').default,
      require('src/assets/images/gallery/gallery8.jpg').default,
      require('src/assets/images/gallery/gallery9.jpg').default,
      require('src/assets/images/gallery/gallery10.jpg').default,
      require('src/assets/images/gallery/gallery11.jpg').default,
      require('src/assets/images/gallery/gallery12.jpg').default,
      require('src/assets/images/gallery/gallery13.jpg').default,
      require('src/assets/images/gallery/gallery14.jpg').default,
      require('src/assets/images/gallery/gallery15.jpg').default,
      require('src/assets/images/gallery/gallery16.jpg').default,
      require('src/assets/images/gallery/gallery17.jpg').default,
      require('src/assets/images/gallery/gallery18.jpg').default,
      require('src/assets/images/gallery/gallery19.jpg').default,
      require('src/assets/images/gallery/gallery20.jpg').default,
      require('src/assets/images/gallery/gallery21.jpg').default,
      require('src/assets/images/gallery/gallery22.jpg').default,
      require('src/assets/images/gallery/gallery23.jpg').default,
      require('src/assets/images/gallery/gallery24.jpg').default,
      require('src/assets/images/gallery/gallery25.jpg').default,
      require('src/assets/images/gallery/gallery26.jpg').default,
      require('src/assets/images/gallery/gallery27.jpg').default,
      require('src/assets/images/gallery/gallery28.jpg').default
    ].filter(image=>title=='gallery.all');
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
