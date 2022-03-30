import {
  Component,
  OnInit,
  Renderer2,
  HostListener,
  Inject,
} from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";
import { BackgroundService } from './background.service';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from "@angular/common";
import { BrowserService } from "src/app/browser.service";

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
  scrollTop:number = 0;
  pagePath: string;
  loadedImage: HTMLImageElement;
  paths = this.backgrounds.getBackgrounds;
  labels = ['',''];
  constructor(
    private router: Router,
    private renderer: Renderer2,
    private readonly backgrounds: BackgroundService,
    private translate: TranslateService,
    private readonly browser: BrowserService
  ) {
    this.translate.onLangChange.subscribe((x)=>{
      this.changeBackground(this.count)
    })
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.pagePath = e.url.split("/").slice(2).join('/')||''
        this.changeBackground(this.count + 1);
      });
  }
  @HostListener("window:resize")
  onResize() {

    const newDevice = this.isMobile?'mobile':'desktop';
    if(newDevice!==this.device){
      this.device = newDevice;
      this.changeBackground(this.count);
    }
    this.scrollTop = this.updateScrollTop();
  }
  @HostListener("window:scroll")
  onScroll() {
    this.scrollTop = this.updateScrollTop();
  }
  get window(){
    return this.browser.window
  }
  get dHeight(){
    const body = this.browser.document.body,
      html = this.browser.document.documentElement;
    return Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
  }
  private updateScrollTop(){

    const wScroll = this.window.pageYOffset;
    const wHeight = this.window.innerHeight;
    return (wScroll / (this.dHeight - wHeight)) * 16;
  };
  private changeBackground(count) {
    const index = this.isMobile?1:0;
    const path = (this.paths.find((x) => x.name === this.pagePath) || this.paths[0]);
    const image = path.images[index];
    const show = count % 2;
    const opacity = show === 1 ? 1 : 0;
    this.labels[show] = path.alt;
    this.loadedImage = new Image();
    this.loadedImage.crossOrigin = "Anonymous";
    this.loadedImage.src = image;
    this.loadedImage.onload = () => {
      let el = this.browser.document.getElementById("background-" + (show + 1)).firstChild;
      let bg = this.browser.document.getElementById("background-2");
      this.renderer.setStyle(el, "backgroundImage", "url(" + image + ")");
      // this.renderer.setAttribute(el,'aria-label',`[${description}]`)
      this.renderer.setStyle(bg, "opacity", opacity);
      this.count = count;
    };
  }
  public get isMobile() {
    return this.layoutWidth <= ProductPageBreakpoint.MobileBreakpoint
  }
  public get layoutWidth(): number{ return this.window.innerWidth}
}
