import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MetaDataService } from 'src/app/services/meta-data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  path: any;
  isCollapsed = false;
  mobileMenu = { name:'mobile', toggle: false};
  menu = [
    { path: ['/'], name: 'HOME', trigger: true,toggle:false },
    {   
        name: 'ABOUT', trigger: false,toggle:false,
        sub: [
            { path: '/about', name: 'OUR STORY' },
            { path: '/instructors', name: 'THE INSTRUCTORS' }
        ]
    },
    { path: ['/horses'], name: 'HORSES', trigger: true,toggle:false },
    {
        name: 'RIDING', trigger: false,toggle:false,
        sub: [
            { path: '/treks', name: 'TREKS' },
            { path: '/lessons', name: 'LESSONS' },
            { path: '/photoshoots', name: 'PHOTO SHOOTS' },
            { path: '/picnics', name: 'PICNICS AND PARTIES' },
            { path: '/safety', name: 'SAFETY' }
        ]
    },
    { path: ['/gallery'], name: 'GALLERY', trigger: true,toggle:false },
    { path: ['/contact'], name: 'CONTACT', trigger: true,toggle:false }
];
  event: any;
  constructor(
    private elementRef: ElementRef<any>,
    private router: Router,
    private route: ActivatedRoute,
    private metadata: MetaDataService
  ) { 
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: NavigationEnd) => {
      this.path = e.url
      this.animateMe(false,null);
    })
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
}
