import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from "@angular/core";
import { ModalService } from "src/app/services/modal.service";
import { GalleryService } from "src/app/gallery.service";
import { BehaviorSubject, combineLatest, Observable, merge } from "rxjs";
import { map, pluck, switchMap, shareReplay, take } from "rxjs/operators";
import { BrowserService } from "src/app/browser.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  left = "<";
  right = ">";
  index = 0;
  group: any = null;
  min = 0;
  max = 0;
  changePosition: BehaviorSubject<number> = new BehaviorSubject(0);

  private contentSize: BehaviorSubject<[number, number]> = new BehaviorSubject(
    this.imageStyleSize
  );

  listOfImages = this.ModalService.getList().pipe(pluck("list"));
  imagePosition: Observable<number> = merge(
    this.changePosition,
    this.ModalService.getList().pipe(pluck("position"))
  ).pipe(
    map((x) => {
      return x;
    }),
    shareReplay(1)
  );
  listLength = this.ModalService.getList().pipe(pluck("max"));
  modalIsOpen = this.listLength.pipe(map((max) => Boolean(max)));

  imgSrc: Observable<string> = combineLatest(
    this.listOfImages,
    this.imagePosition
  ).pipe(
    map(([list, position]) => {
      const item = list.find((_, i) => i == position) || { img: "" };
      return item.img;
    }),
    shareReplay(1)
  );
  imageUrl: Observable<string> = this.imgSrc.pipe(map((src) => `url(${src})`));

  imageSize: Observable<{ height: string; width: string }> = combineLatest(
    this.contentSize,
    this.imgSrc
  ).pipe(
    switchMap(async ([contentSize, src]) => {
      const [contentWidth, contentHeight] = contentSize;
      const [width, height] = src
        ? await this.galleryService.computeImageDimensionsFromFile(src)
        : [0, 0];
      const ratio =
        width && height
          ? Math.min(contentWidth / width, contentHeight / height)
          : 0;
      return {
        height: `${height * ratio}px`,
        width: `${width * ratio}px`,
      };
    }),
    shareReplay(1)
  );
  imageHeight: Observable<string> = this.imageSize.pipe(pluck("height"));
  imageWidth: Observable<string> = this.imageSize.pipe(pluck("width"));

  constructor(
    private ModalService: ModalService,
    private galleryService: GalleryService,
    private browser: BrowserService,
  ) {}
  @ViewChild("ImageContent", { static: false })
  private readonly ImageContentComponent: ElementRef<HTMLDivElement>;
  ngOnInit(): void {}
  @HostListener("window:resize")
  onResize() {
    this.contentSize.next(this.imageStyleSize);
  }
  public async changePage(symbol) {
    const index = await combineLatest(this.imagePosition, this.listLength)
      .pipe(
        map(([position, maxPosition]) => {
          const operation = symbol === "+";
          return operation
            ? (position + 1) % maxPosition
            : position - 1 >= 0
            ? position - 1
            : maxPosition;
        }),
        take(1)
      )
      .toPromise();
    this.changePosition.next(index);
  }

  get imageStyleSize(): [number, number] {
    return [Math.min(this.browser.window.innerWidth * 0.95, 800), this.browser.window.innerHeight];
  }

  public closeModal() {
    this.ModalService.triggerEvent({ list: [], position: 0 });
  }
}
