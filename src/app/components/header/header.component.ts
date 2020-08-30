import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { MetaDataService } from 'src/app/services/meta-data.service';
import { LanguageService } from 'src/app/services/language.service';
import { of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
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
  languageEn = require('src/assets/images/flags/united-kingdom.svg');
  languageGr = require('src/assets/images/flags/greece.svg');
  checkLanguage = of(this.language.isEngilish)
    .pipe(
    tap(val=>{
      this.menu = [
        { path: ['/'], name: 'header.home', trigger: true,toggle:false },
        {   
            name: 'header.about', trigger: false,toggle:false,
            sub: [
                { path: '/about', name: 'header.story' },
                { path: '/instructors', name: 'header.instructors' }
            ]
        },
        { path: ['/horses'], name: 'header.horses', trigger: true,toggle:false },
        {
            name: 'header.riding', trigger: false,toggle:false,
            sub: [
                { path: '/treks', name: 'header.treks' },
                { path: '/lessons', name: 'header.lessons' },
                { path: '/photoshoots', name: 'header.photos' },
                { path: '/picnics', name: 'header.picnic' },
                { path: '/safety', name: 'header.safety' }
            ]
        },
        { path: ['/carriage'], name: 'header.carriage', trigger: true, toggle: false },
        { path: ['/gallery'], name: 'header.gallery', trigger: true, toggle: false },
        { path: ['/contact'], name: 'header.contact', trigger: true, toggle: false }
      ]
    }));
  menu = [
    { path: ['/'], name: 'header.home', trigger: true,toggle:false },
    {   
        name: 'header.about', trigger: false,toggle:false,
        sub: [
            { path: '/about', name: 'header.story' },
            { path: '/instructors', name: 'header.instructors' }
        ]
    },
    { path: ['/horses'], name: 'header.horses', trigger: true,toggle:false },
    {
        name: 'header.riding', trigger: false,toggle:false,
        sub: [
            { path: '/treks', name: 'header.treks' },
            { path: '/lessons', name: 'header.lessons' },
            { path: '/photoshoots', name: 'header.photos' },
            { path: '/picnics', name: 'header.picnic' },
            { path: '/safety', name: 'header.safety' }
        ]
    },
    { path: ['/carriage'], name: 'header.carriage', trigger: true, toggle: false },
    { path: ['/gallery'], name: 'header.gallery', trigger: true, toggle: false },
    { path: ['/contact'], name: 'header.contact', trigger: true, toggle: false }
  ];
  event: any;
  constructor(
    private elementRef: ElementRef<any>,
    private router: Router,
    private route: ActivatedRoute,
    private metadata: MetaDataService,
    private language: LanguageService,
    private translate: TranslateService
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
  changeLanguage(lang){
    this.translate.use(lang);
  }
}
