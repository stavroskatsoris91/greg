import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  pagePath: string;
  isCollapsed = false;
  mobileMenu = { name: "mobile", toggle: false };
  imageLogo = require("src/assets/images/logo2.png").default;
  languageEn = require("src/assets/images/flags/united-kingdom.svg").default;
  languageGr = require("src/assets/images/flags/greece.svg").default;
  menu = [
    { path: [""], name: "header.home", toggle: false },
    {
      name: "header.about",
      toggle: false,
      sub: [
        { path: "about", name: "header.story" },
        { path: "instructors", name: "header.instructors" },
        { path: "horses", name: "header.horses" },
        { path: "safety", name: "header.safety" },
      ],
      subPath: [],
    },
    {
      name: "header.activities",
      toggle: false,
      sub: [
        { path: "activities/treks", name: "header.treks" },
        { path: "activities/lessons", name: "header.lessons" },
        { path: "activities/photoshoots", name: "header.photos" },
        // { path: 'picnics', name: 'header.picnic' },
        { path: "activities/carriage", name: "header.carriage" },
      ],
      subPath: [],
    },
    { path: ["gallery"], name: "header.gallery", toggle: false },
    {
      name: "header.contact",
      toggle: false,
      sub: [
        { path: "contact/booking", name: "header.booking" },
        { path: "contact/message", name: "header.message" },
      ],
      subPath: [],
    },
  ];
  event: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        // get the path after language
        this.pagePath = e.url.split("/").slice(2).join('/')||''
        this.animateMe(false, null);
      });
  }

  ngOnInit(): void {
    // this.pagePath = this.route.snapshot.url[0].toString();
    this.menu.map(
      (option) =>
        (option.subPath =
          option.sub && option.sub.map((subOption) => subOption.path))
    );
  }
  // public hideCollapse() {
  //   this.elementRef.nativeElement.getElementsByClassName('collapse').collapse('hide');
  // }
  animateMe(mobileMenuToggle, item: { name: string }) {
    this.menu.map((x) => {
      if (item && item.name == x.name) {
        x.toggle = !x.toggle;
      } else {
        x.toggle = false;
      }
    });
    this.mobileMenu.toggle = mobileMenuToggle;
  }
  getState(toggle) {
    return toggle ? "large" : "small";
  }
  get language() {
    return (this.translate.currentLang || this.translate.defaultLang) + "/";
  }
  changeLanguage(lang) {
    let url = this.router.url.split("/");
    url[1] = lang;
    this.router.navigate(url);
  }
}
