import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MetaDataService } from 'src/app/services/meta-data.service';
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
  imageLogo = require('src/assets/images/logo2.png').default;
  languageEn = require('src/assets/images/flags/united-kingdom.svg').default;
  languageGr = require('src/assets/images/flags/greece.svg').default;
  menu = [
    { path: [''], name: 'header.home', toggle:false },
    {   
        name: 'header.about', toggle:false,
        sub: [
            { path: 'about', name: 'header.story' },
            { path: 'instructors', name: 'header.instructors' }
        ],
        subPath:[]
    },
    { path: ['horses'], name: 'header.horses', toggle:false },
    {
        name: 'header.riding', toggle:false,
        sub: [
            { path: 'treks', name: 'header.treks' },
            { path: 'lessons', name: 'header.lessons' },
            { path: 'photoshoots', name: 'header.photos' },
            // { path: 'picnics', name: 'header.picnic' },
            { path: 'safety', name: 'header.safety' }
        ],
        subPath:[]
    },
    { path: ['carriage'], name: 'header.carriage',  toggle: false },
    { path: ['gallery'], name: 'header.gallery',  toggle: false },
    { path: ['contact'], name: 'header.contact',  toggle: false }
  ];
  event: any;
  constructor(
    private elementRef: ElementRef<any>,
    private router: Router,
    private route: ActivatedRoute,
    private metadata: MetaDataService,
    private translate: TranslateService
  ) { 
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: NavigationEnd) => {
      this.path = e.url.split('/')[2]||'';
      this.animateMe(false,null);
    })
  }

  ngOnInit(): void {
    this.path = this.route.snapshot.url[0];
    this.menu.map(option=>option.subPath=option.sub&&option.sub.map(subOption=>subOption.path));
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
  get language(){
    return (this.translate.currentLang||this.translate.defaultLang)+'/';
  }
  changeLanguage(lang){
    let url = this.router.url.split('/');
    url[1]=lang;
    this.router.navigate(url);
  }
}
