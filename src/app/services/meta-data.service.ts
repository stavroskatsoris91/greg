import { Router, NavigationEnd } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MetaDataService {
  baseUrl = window.location.protocol + '//' + window.location.hostname;
  homeImage = require('src/assets/images/background/home.jpg');
  redirect = false;
  redirectPath: any;
  constructor(
    private readonly router: Router,
    private readonly meta: Meta,
    private readonly title: Title,
    @Inject(DOCUMENT) private document: Document,
    private readonly translate: TranslateService,
  ) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    )
      .subscribe((e) => {
        this.getData()
      });
    this.translate.onLangChange.subscribe((x)=>{this.getData()})
  }
  private getData() {

    let data = {
      image: this.homeImage,
      location: this.baseUrl,
      title: this.translate.instant('meta.title'),
      keywords: this.translate.instant('meta.keywords'),
      description: this.translate.instant('meta.description'),
      prerender_redirect: this.redirect,
      prerender_redirect_path : this.redirectPath
    }
    this.updateMeta(data);
  }
  public redirectPage(path) {
    this.redirect = true;
    this.redirectPath = this.baseUrl+'/'+path;
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
          { property: 'og:url', content: window.location.href },
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
