import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  paths = [
    {name:'/',image:require('src/assets/images/background/home.jpg')},
    {name:'/about',image:require('src/assets/images/background/about.jpg')},
    {name:'/instructors',image:require('src/assets/images/background/about.jpg')},
    {name:'/horses',image:require('src/assets/images/background/horses.jpg')},
    {name:'/treks',image:require('src/assets/images/background/treks.jpg')},
    // {name:'/riding',image:require('src/assets/images/background/riding.jpg')},
    {name:'/gallery',image:require('src/assets/images/background/gallery.jpg')},
    {name:'/contact',image:require('src/assets/images/background/contact.jpg')},
    {name:'/thankyou',image:require('src/assets/images/background/contact.jpg')},
    {name:'/lessons',image:require('src/assets/images/background/lessons.jpg')},
    {name:'/photoshoots',image:require('src/assets/images/background/photoshoots.jpg')},
    {name:'/picnics',image:require('src/assets/images/background/picnics.jpg')},
    {name:'/safety',image:require('src/assets/images/background/safety.jpg')}
  ];
  count = 0;
  scrollTop = 0;
  path: string = '/';
  constructor(
    private router: Router,
    private elementRef: ElementRef<any>, 
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: NavigationEnd) => {
      this.path = e.url;
      this.changeBackground(this.count+1);

    })
    this.changeBackground(this.count);
    window['$'](window).on('scroll',(e)=>{
      let wScroll = window['$'](window).scrollTop();
      let dHeight = window['$'](document).height();
      let wHeight = window['$'](window).height();
      let scrollTop = wScroll / (dHeight - wHeight)* 30;
      this.updateStyle(scrollTop);
    });
  }
  private updateStyle(scrollTop){
    let list =this.elementRef.nativeElement.getElementsByClassName('background');
    Array.from(list).map((e)=>{
      this.renderer.setStyle(e['firstChild'],'transform','translateY(-'+scrollTop+'%)');
    })
  }
  private changeBackground(count){
      var image = this.paths[0].image;
      var show = count%2;
      var opacity = show===1?1:0;
      this.paths.some((x)=>{
        if(x.name===this.path){
          image = x.image;
          return true;
        }
      });
      // images[show] =  image;
      window['$']('<img/>').attr('src', image).on('load', (ev)=> {
        window['$'](ev.currentTarget).remove(); // prevent memory leaks as @benweet suggested
        let el = document.getElementById('background-'+(show+1)).firstChild;
        let bg = document.getElementById('background-2');
        this.renderer.setStyle(el,'backgroundImage','url('+image+')');
        this.renderer.setStyle(bg,'opacity',opacity);
        this.count = count;
      });
    }
}
