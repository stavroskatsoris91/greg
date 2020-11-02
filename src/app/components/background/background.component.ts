import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
} from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";

export class ProductPageBreakpoint {
  static MobileBreakpoint: number = 575
}
@Component({
  selector: "app-background",
  templateUrl: "./background.component.html",
  styleUrls: ["./background.component.scss"],
})
export class BackgroundComponent implements OnInit {
  imageSrc = null;
  device = 'mobile';
  paths = [
    {
      name: "",
      images: [
        require("src/assets/images/background/home.jpg").default,
        require("src/assets/images/background/homemob.jpg").default,
      ],
    },
    {
      name: "about",
      images: [
        require("src/assets/images/background/about.jpg").default,
        require("src/assets/images/background/aboutmob.jpg").default,
      ],
    },
    {
      name: "instructors",
      images: [
        require("src/assets/images/background/about.jpg").default,
        require("src/assets/images/background/aboutmob.jpg").default,
      ],
    },
    {
      name: "horses",
      images: [
        require("src/assets/images/background/horses.jpg").default,
        require("src/assets/images/background/horsesmob.jpg").default,
      ],
    },
    {
      name: "treks",
      images: [
        require("src/assets/images/background/treks.jpg").default,
        require("src/assets/images/background/treksmob.jpg").default,
      ],
    },
    {
      name: "carriage",
      images: [
        require("src/assets/images/background/carriage.jpg").default,
        require("src/assets/images/background/carriagemob.jpg").default,
      ],
    },
    {
      name: "gallery",
      images: [
        require("src/assets/images/background/gallery.jpg").default,
        require("src/assets/images/background/gallerymob.jpg").default,
      ],
    },
    {
      name: "contact",
      images: [
        require("src/assets/images/background/contact.jpg").default,
        require("src/assets/images/background/contactmob.jpg").default,
      ],
    },
    {
      name: "thankyou",
      images: [
        require("src/assets/images/background/contact.jpg").default,
        require("src/assets/images/background/contactmob.jpg").default,
      ],
    },
    {
      name: "lessons",
      images: [
        require("src/assets/images/background/lessons.jpg").default,
        require("src/assets/images/background/lessonsmob.jpg").default,
      ],
    },
    {
      name: "photoshoots",
      images: [
        require("src/assets/images/background/photoshoots.jpg").default,
        require("src/assets/images/background/photoshootsmob.jpg").default,
      ],
    },
    {
      name: "picnics",
      images: [
        require("src/assets/images/background/picnics.jpg").default,
        require("src/assets/images/background/picnicsmob.jpg").default,
      ],
    },
    {
      name: "safety",
      images: [
        require("src/assets/images/background/safety.jpg").default,
        require("src/assets/images/background/safetymob.jpg").default,
      ],
    },
  ];
  count = 0;
  scrollTop = 0;
  path: string = "/";
  loadedImage: HTMLImageElement;
  constructor(
    private router: Router,
    private elementRef: ElementRef<any>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.path = e.url.split("/").slice(-1)[0];
        this.changeBackground(this.count + 1);
      });
    window.addEventListener("scroll", this.scrollEvent, true);
  }
  @HostListener("window:resize", ["$event"])
  onResize(event) {

    const newDevice = this.isMobile?'mobile':'desktop';
    if(newDevice!==this.device){
      this.device = newDevice;
      this.changeBackground(this.count);
    }
    this.scrollEvent();
  }

  private updateStyle(scrollTop) {
    let list = this.elementRef.nativeElement.getElementsByClassName(
      "background"
    );
    Array.from(list).map((e) => {
      this.renderer.setStyle(
        e["firstChild"],
        "transform",
        "translateY(-" + scrollTop + "%)"
      );
    });
  }
  scrollEvent = () => {
    const wScroll = window.pageYOffset;
    const body = document.body,
      html = document.documentElement;
    const dHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const wHeight = window.innerHeight;
    const scrollTop = (wScroll / (dHeight - wHeight)) * 16; //x = 100 / background
    this.updateStyle(scrollTop);
  };
  private changeBackground(count) {
    const index = this.isMobile?1:0;
    const image = (this.paths.find((x) => x.name === this.path) || this.paths[0]).images[index];
    const show = count % 2;
    const opacity = show === 1 ? 1 : 0;
    
    this.loadedImage = new Image();
    this.loadedImage.crossOrigin = "Anonymous";
    this.loadedImage.src = image;
    this.loadedImage.onload = () => {
      let el = document.getElementById("background-" + (show + 1)).firstChild;
      let bg = document.getElementById("background-2");
      this.renderer.setStyle(el, "backgroundImage", "url(" + image + ")");
      this.renderer.setStyle(bg, "opacity", opacity);
      this.count = count;
    };
  }
  public get isMobile() {
    return this.layoutWidth <= ProductPageBreakpoint.MobileBreakpoint
  }
  public get layoutWidth(): number{ return window.innerWidth}
}
