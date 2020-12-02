import { Injectable } from '@angular/core';

type CORSMethod = "Anonymous" | "User-Authenticated";

@Injectable({
  providedIn: 'root'
})
export class LoadImagesService {

  constructor() { }
  public async fetchImage(
    url: string,
    cors: CORSMethod = null
  ): Promise<HTMLImageElement> {
    const cachedImageElement = this.fetchedImages.get(url);
    if (cachedImageElement) {
      return cachedImageElement;
    }

    const fetchedImageElement = await this.fetchImageElement(url, cors);
    this.fetchedImages.set(url, fetchedImageElement);
    return fetchedImageElement;
  }
  private readonly fetchedImages = new Map<string, HTMLImageElement>();

  private readonly fetchImageElement = (src: string, cors: CORSMethod = null) =>
    new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.crossOrigin = cors;
      image.src = src;
    });
}
