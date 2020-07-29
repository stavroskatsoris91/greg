import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { MetaDataService } from 'src/app/services/meta-data.service';
import { LanguageService } from 'src/app/services/language.service';
import { of } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  path: any;
  isCollapsed = false;
  mobileMenu = { name:'mobile', toggle: false};
  imageLogo = require('src/assets/images/logo2.png');
  checkLanguage = of(this.language.isEngilish)
    .pipe(
    tap(val=>{
      this.menu = [
        { path: ['/'], name: this.language.header.home, trigger: true,toggle:false },
        {   
            name: this.language.header.about, trigger: false,toggle:false,
            sub: [
                { path: '/about', name: this.language.header.story },
                { path: '/instructors', name: this.language.header.instructors }
            ]
        },
        { path: ['/horses'], name: this.language.header.horses, trigger: true,toggle:false },
        {
            name: this.language.header.riding, trigger: false,toggle:false,
            sub: [
                { path: '/treks', name: this.language.header.treks },
                { path: '/lessons', name: this.language.header.lessons },
                { path: '/photoshoots', name: this.language.header.photos },
                { path: '/picnics', name: this.language.header.picnic },
                { path: '/safety', name: this.language.header.safety }
            ]
        },
        { path: ['/carriage'], name: this.language.header.carriage, trigger: true, toggle: false },
        { path: ['/gallery'], name: this.language.header.gallery, trigger: true, toggle: false },
        { path: ['/contact'], name: this.language.header.contact, trigger: true, toggle: false }
      ]
    }));
  menu = [
    { path: ['/'], name: this.language.header.home, trigger: true,toggle:false },
    {   
        name: this.language.header.about, trigger: false,toggle:false,
        sub: [
            { path: '/about', name: this.language.header.story },
            { path: '/instructors', name: this.language.header.instructors }
        ]
    },
    { path: ['/horses'], name: this.language.header.horses, trigger: true,toggle:false },
    {
        name: this.language.header.riding, trigger: false,toggle:false,
        sub: [
            { path: '/treks', name: this.language.header.treks },
            { path: '/lessons', name: this.language.header.lessons },
            { path: '/photoshoots', name: this.language.header.photos },
            { path: '/picnics', name: this.language.header.picnic },
            { path: '/safety', name: this.language.header.safety }
        ]
    },
    { path: ['/carriage'], name: this.language.header.carriage, trigger: true, toggle: false },
    { path: ['/gallery'], name: this.language.header.gallery, trigger: true, toggle: false },
    { path: ['/contact'], name: this.language.header.contact, trigger: true, toggle: false }
  ];
  event: any;
  constructor(
    private elementRef: ElementRef<any>,
    private router: Router,
    private route: ActivatedRoute,
    private metadata: MetaDataService,
    private language: LanguageService
  ) { 
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: NavigationEnd) => {
      this.path = e.url
      this.animateMe(false,null);
    })
    this.checkLanguage.subscribe()
  }

  ngOnInit(): void {
    this.path = this.route.snapshot.url[0];
  }
  // public hideCollapse() {
  //   this.elementRef.nativeElement.getElementsByClassName('collapse').collapse('hide');
  // }
  animateMe(mobileMenuToggle,item: { name: string; }) {
    this.menu.map((x) => {
      if (item && item.name == x.name) {
        x.toggle = !x.toggle;
      }
      else {
        x.toggle = false;
      }
    })
    this.mobileMenu.toggle = mobileMenuToggle;
  }
  getState(toggle){
    return toggle?'large':'small';
  }
  changeLanguage(){
    this.language.isEngilish = !this.language.isEngilish;
  }
}
