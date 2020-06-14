import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  path: any;
  isCollapsed = false;
  constructor(
    private elementRef: ElementRef<any>,
    private router: Router,
    private route: ActivatedRoute,
  ) { 
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: NavigationEnd) => {
      this.path = e.url
      this.hideCollapse();
    })
  }

  ngOnInit(): void {
    this.path = this.route.snapshot.url[0];
  }
  menu = [
      { path: ['/'], name: 'HOME', trigger: true },
      {   
          name: 'ABOUT', trigger: false,
          sub: [
              { path: '/about', name: 'OUR STORY' },
              { path: '/instructors', name: 'THE INSTRUCTORS' }
          ]
      },
      { path: ['/horses'], name: 'HORSES', trigger: true },
      {
          name: 'RIDING', trigger: false,
          sub: [
              { path: '/treks', name: 'TREKS' },
              { path: '/lessons', name: 'LESSONS' },
              { path: '/photoshoots', name: 'PHOTO SHOOTS' },
              { path: '/picnics', name: 'PICNICS AND PARTIES' },
              { path: '/safety', name: 'SAFETY' }
          ]
      },
      { path: ['/gallery'], name: 'GALLERY', trigger: true },
      { path: ['/contact'], name: 'CONTACT', trigger: true }
  ];
  public hideCollapse() {
    window['$']('.collapse')['collapse']('hide');
  }
}
