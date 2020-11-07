import {
  Component,
  HostListener,
  ElementRef,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { GalleryService } from "src/app/gallery.service";
import {
  Observable,
  BehaviorSubject,
  fromEvent,
  combineLatest,
  of,
  from,
  merge,
} from "rxjs";
import {
  switchMap,
  debounceTime,
  map,
  take,
  mergeMap,
  throttleTime,
  share,
  withLatestFrom,
  tap,
} from "rxjs/operators";
import { ModalService } from "src/app/services/modal.service";
export interface StyleImage extends ImageOnCategory {
  size: [string, string];
  style: {
    top: number;
    left: number;
    width: number;
    height: number;
    display: boolean;
  };
}
export interface ImageSize {
  height: number;
  width: number;
}
export interface ImageOnCategory {
  src: string;
  size: [string, string];
  category: string;
}
export class windowBreakpoint {
  static MobileBreakpoint: number = 768;
}
export interface GalleryCategory {
  title: string;
  value: string;
}
@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
  providers: [GalleryService],
})
export class GalleryComponent {
  categories: GalleryCategory[] = this.galleryService.categories;
  selected = new BehaviorSubject<string>(this.categories[0].value);
  loadingImages = new BehaviorSubject<boolean>(true);
  imageList: ImageOnCategory[] = this.galleryService.getImages;
  imageOriginalSizes: Observable<StyleImage[]> = of(this.imageList).pipe(
    switchMap((images) =>
      combineLatest(
        images.map((image) => from(this.imagesWithSizes(image, image.size)))
      )
    ),
    tap(() => this.loadingImages.next(false)),
    share()
  );
  getWindowsEvent = new BehaviorSubject(window);
  windowResize: Observable<Event> = fromEvent(window, "resize").pipe(
    debounceTime(500)
  ); //throttleTime

  setImagePositions: Observable<StyleImage[]> = combineLatest(
    this.imageOriginalSizes,
    this.selected,
    merge(this.getWindowsEvent, this.windowResize)
  ).pipe(
    map(([images, category]) => {
      const innerWidth = this.galleryImagesWidth;
      const columns = Array.from(new Array(this.numberOfColumns), (_, i) => {
        return { top: 0, left: i * (innerWidth / this.numberOfColumns) };
      });
      const styleImages: StyleImage[] = images.map(
        (image: StyleImage): StyleImage => {
          const displayImage = this.displayImage(image, category);
          const selectedColumn = columns.reduce((prev, next) =>
            prev.top <= next.top ? prev : next
          );
          const selectedColumnTop = selectedColumn.top;
          const selectedColumnLeft = selectedColumn.left;
          const imageHeight = this.sizeOnWindow(
            image,
            innerWidth / columns.length
          ).height;
          selectedColumn.top += displayImage ? imageHeight : 0;
          const imageWidth = 100 / this.numberOfColumns;
          image.style = {
            top: selectedColumnTop,
            left: selectedColumnLeft,
            width: imageWidth,
            height: imageHeight,
            display: displayImage,
          };
          return image;
        }
      );
      return styleImages;
    })
  );
  index = 0;
  containersHeight: Observable<string> = this.setImagePositions.pipe(
    map((images: StyleImage[]) => {
      const maxHeight = images
        .map((image: StyleImage): number => {
          return image.style.top + image.style.height;
        })
        .reduce(function (a, b) {
          return Math.max(a, b);
        });
      return `${maxHeight}px`;
    })
  );
  get numberOfColumns() {
    return Math.ceil(window.innerWidth / windowBreakpoint.MobileBreakpoint);
  }
  private displayImage(image, selected): boolean {
    return selected == "all" || image.category == selected;
  }
  galleryItems = combineLatest();

  @ViewChild("GalleryImages", { static: false })
  private readonly galleryImagesComponent: ElementRef<HTMLDivElement>;

  constructor(
    private readonly elementRef: ElementRef<any>,
    private readonly renderer: Renderer2,
    private readonly galleryService: GalleryService,
    private readonly modalService: ModalService
  ) {}
  ngOnInit() {}
  get galleryImagesWidth() {
    return this.galleryImagesComponent.nativeElement.clientWidth;
  }
  private randomOrder(images) {
    return images.sort(() => (Math.random() < 0.5 ? -1 : 1));
  }
  async imagesWithSizes({ src, category }, size): Promise<StyleImage> {
    const a = await size;
    return {
      src: src,
      size: a,
      style: { top: 0, left: 0, width: 0, height: 0, display: true },
      category: category,
    };
  }
  private sizeOnWindow(image, width): { width: number; height: number } {
    const { size } = image;
    const ratio = width / size[0];
    return {
      width: size[0] * ratio,
      height: size[1] * ratio,
    };
  }
  public async showModal({ src }) {
    const listOfImages = this.setImagePositions.pipe(
      take(1),
      map((images) =>
        images
          .filter((image) => image.style.display)
          .map((image) => ({ img: image.src }))
      )
    );
    const position = listOfImages.pipe(
      map((images) => images.findIndex((image) => image.img == src))
    );

    return combineLatest(listOfImages, position)
      .pipe(
        take(1),
        map(([list, pos]) => {
          this.modalService.triggerEvent({ list, position: pos });
        })
      )
      .toPromise();
  }
}
