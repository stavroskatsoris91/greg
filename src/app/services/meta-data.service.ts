import { Router, NavigationEnd } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BrowserService } from '../browser.service';

@Injectable({
  providedIn: 'root'
})
export class MetaDataService {
  baseUrl = this.document.location.origin
  homeImage = require('src/assets/images/background/home.jpg').default;
  redirect = false;
  redirectPath: any;
  constructor(
    private readonly router: Router,
    private readonly meta: Meta,
    private readonly title: Title,
    private readonly browser: BrowserService,
    private readonly translate: TranslateService,
  ) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    )
      .subscribe((e:NavigationEnd) => {
        if(e.url && e.urlAfterRedirects && e.url !== e.urlAfterRedirects){
          this.redirectPage(e.urlAfterRedirects)
        }
        this.getData()
      });
    this.translate.onLangChange.subscribe((x)=>{this.getData()})
  }
  private get document(){
    return this.browser.document;
  }
  private getData() {

    let data = {
      image: this.homeImage,
      location: this.baseUrl,
      title: this.translate.instant('meta.title'),
      keywords: this.translate.instant('meta.keywords'),
      description: this.translate.instant('meta.description'),
      language: this.translate.currentLang,
      prerender_redirect: this.redirect,
      prerender_redirect_path : this.redirectPath
    }
    this.updateMeta(data);
  }
  public redirectPage(path) {
    this.redirect = true;
    this.redirectPath = new URL(path,this.baseUrl).href;
  }
  private updateMeta(data) {
    this.title.setTitle(data.title);
    let show = this.getMeta(data);
    this.document.documentElement.lang = this.translate.currentLang||this.translate.defaultLang; 
    show.map((x) => {
      x.list.forEach((y) => {
        let value = 'name';
        if (y.hasOwnProperty('property')) {
          value = 'property';
        }
        if (this.meta.getTag(value + '="' + y[value] + '"')) {
          if (x.condition == true) {
            this.meta.updateTag(y);
          }
          else {
            this.meta.removeTag(value + '="' + y[value] + '"');
          }
        }
        else if (x.condition == true) {
          this.meta.addTag(y);
        }
      })
    })
  }
  private getMeta(data) {
    let list = [
      {
        condition: true,
        list: [
          { name: 'description', content: data.description },
          { name: 'keywords', content: data.keywords },
          { property: 'title', content: data.title },
          { property: 'og:title', content: data.title },
          { property: 'og:description', content: data.description },
          { property: 'og:type', content: data.type },
          { property: 'og:image', content: data.location + '/' + data.image },
          { property: 'og:url', content: this.document.location.href },
          { property: 'og:locale', content: data.language },
          { name: 'twitter:title', content: data.title },
          { name: 'twitter:description', content: data.tw_description },
          { name: 'twitter:image', content: data.location + '/' + data.image }
        ],
      },
      
      {
        condition:data['prerender_redirect'],
        list: [
          { name: 'prerender-status-code', content: '301' },
          { name: 'prerender-header', content: data.prerender_redirect_path }
        ]
      }
    ];
    return list;
  }
}
