import { Router, NavigationEnd } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetaDataService {
  baseUrl = window.location.protocol + '//' + window.location.hostname;
  homeImage = require('src/assets/images/background/home.jpg');
  constructor(
    private readonly router: Router,
    private readonly meta: Meta,
    private readonly title: Title,
  ) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    )
      .subscribe((e) => {
        this.getData(e);
      });
  }
  private getData(e) {

    let data = {
      image: this.homeImage,
      location: this.baseUrl
    }
    this.updateMeta(data);
  }
  private updateMeta(data) {
    // this.title.setTitle(data.title);
    let show = this.getMeta(data);

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
          // { name: 'description', content: data.fb_description },
          // { name: 'keywords', content: data.keywords },
          // { property: 'og:site_name', content: data.name },
          // { property: 'og:title', content: data.title },
          // { property: 'og:description', content: data.fb_description },
          // { property: 'og:type', content: data.type },
          { property: 'og:image', content: data.location + '/' + data.image },
          { property: 'og:url', content: data.location },
          // { name: 'twitter:site', content: data.twitter },
          // { name: 'twitter:title', content: data.title },
          // { name: 'twitter:description', content: data.tw_description },
          { name: 'twitter:image', content: data.location + '/' + data.image }
        ]
      },
    ];
    return list;
  }
}
