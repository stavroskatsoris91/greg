import {
  Component,
  OnInit,
  Renderer2,
  HostListener,
} from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";
import { BackgroundService } from './background.service';
import { TranslateService } from '@ngx-translate/core';

export class ProductPageBreakpoint {
  static MobileBreakpoint: number = 575
}
@Component({
  selector: "app-background",
  templateUrl: "./background.component.html",
  styleUrls: ["./background.component.scss"],
})
export class BackgroundComponent implements OnInit {
  device = 'mobile';
  count = 0;
  path: string = "/";
  loadedImage: HTMLImageElement;
  paths = this.backgrounds.getBackgrounds;
  labels = ['',''];
  constructor(
    private router: Router,
    private renderer: Renderer2,
    private readonly backgrounds: BackgroundService,
    private translate: TranslateService,
  ) {
    this.translate.onLangChange.subscribe((x)=>{
      this.changeBackground(this.count)
    })
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.path = e.url.split("/").slice(-1)[0];
        this.changeBackground(this.count + 1);
      });
  }
  @HostListener("window:resize", ["$event"])
  onResize(event) {

    const newDevice = this.isMobile?'mobile':'desktop';
    if(newDevice!==this.device){
      this.device = newDevice;
      this.changeBackground(this.count);
    }
  }
  get dHeight(){
    const body = document.body,
      html = document.documentElement;
    return Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
  }
  get scrollTop(){
    const wScroll = window.pageYOffset;
    const wHeight = window.innerHeight;
    return (wScroll / (this.dHeight - wHeight)) * 16;
  };
  private changeBackground(count) {
    const index = this.isMobile?1:0;
    const path = (this.paths.find((x) => x.name === this.path) || this.paths[0]);
    const image = path.images[index];
    const show = count % 2;
    const opacity = show === 1 ? 1 : 0;
    this.labels[show] = path.alt;
    this.loadedImage = new Image();
    this.loadedImage.crossOrigin = "Anonymous";
    this.loadedImage.src = image;
    this.loadedImage.onload = () => {
      let el = document.getElementById("background-" + (show + 1)).firstChild;
      let bg = document.getElementById("background-2");
      this.renderer.setStyle(el, "backgroundImage", "url(" + image + ")");
      // this.renderer.setAttribute(el,'aria-label',`[${description}]`)
      this.renderer.setStyle(bg, "opacity", opacity);
      this.count = count;
    };
  }
  public get isMobile() {
    return this.layoutWidth <= ProductPageBreakpoint.MobileBreakpoint
  }
  public get layoutWidth(): number{ return window.innerWidth}
}
