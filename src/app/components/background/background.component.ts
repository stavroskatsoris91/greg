import { Component, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  imageSrc = null;
  paths = [
    { name: '', image: require('src/assets/images/background/home.jpg').default },
    { name: 'about', image: require('src/assets/images/background/about.jpg').default },
    { name: 'instructors', image: require('src/assets/images/background/about.jpg').default },
    { name: 'horses', image: require('src/assets/images/background/horses.jpg').default },
    { name: 'treks', image: require('src/assets/images/background/treks.jpg').default },
    { name: 'carriage', image: require('src/assets/images/background/carriage.jpg').default },
    { name: 'gallery', image: require('src/assets/images/background/gallery.jpg').default },
    { name: 'contact', image: require('src/assets/images/background/contact.jpg').default },
    { name: 'thankyou', image: require('src/assets/images/background/contact.jpg').default },
    { name: 'lessons', image: require('src/assets/images/background/lessons.jpg').default },
    { name: 'photoshoots', image: require('src/assets/images/background/photoshoots.jpg').default },
    { name: 'picnics', image: require('src/assets/images/background/picnics.jpg').default },
    { name: 'safety', image: require('src/assets/images/background/safety.jpg').default }
  ];
  count = 0;
  scrollTop = 0;
  path: string = '/';
  loadedImage: HTMLImageElement;
  constructor(
    private router: Router,
    private elementRef: ElementRef<any>,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: NavigationEnd) => {
      this.path = e.url.split('/').slice(-1)[0];
      this.changeBackground(this.count + 1);

    })
    this.changeBackground(this.count);
    window.addEventListener('scroll', this.scrollEvent, true);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.scrollEvent();
  }

  private updateStyle(scrollTop) {
    let list = this.elementRef.nativeElement.getElementsByClassName('background');
    Array.from(list).map((e) => {
      this.renderer.setStyle(e['firstChild'], 'transform', 'translateY(-' + scrollTop + '%)');
    })
  }
  scrollEvent = () => {
    const wScroll = window.pageYOffset;
    const body = document.body,
      html = document.documentElement;
    const dHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const wHeight = window.innerHeight;
    const scrollTop = wScroll / (dHeight - wHeight) * 30;
    this.updateStyle(scrollTop);
  }
  private changeBackground(count) {
    var image = this.paths[0].image;
    var show = count % 2;
    var opacity = show === 1 ? 1 : 0;
    this.paths.some((x) => {
      if (x.name === this.path) {
        image = x.image;
        return true;
      }
    });
    this.loadedImage = new Image();
    this.loadedImage.crossOrigin = "Anonymous";
    this.loadedImage.src = image;
    this.loadedImage.onload =  ()=> {
      let el = document.getElementById('background-' + (show + 1)).firstChild;
      let bg = document.getElementById('background-2');
      this.renderer.setStyle(el, 'backgroundImage', 'url(' + image + ')');
      this.renderer.setStyle(bg, 'opacity', opacity);
      this.count = count;
    }
  }
}
