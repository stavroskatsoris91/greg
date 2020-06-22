import { Component, OnInit, ElementRef } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  text = 'Home';
  homeText = [
    'Do something different while visiting Spetses! Try horse trekking to see the island’s countryside and enjoy the panoramic views of the sparkling sea from above. We have six great treks for you to choose from.',
    'For those who love horse riding we offer riding lessons in our outdoors arena next to the view of the sea and Spetspoula island. We have private lessons and group lessons if you want to come up with friends.',// Or you can a enjoy a little ride in our arena for 12 euros.',
    'Apart from riding you can enjoy a picnic with your friends or organize kids’ parties with pony rides in the arena.  We also provide our horses for photoshoots for any special occasion.'
  ];
  checkTripAdvisor: any;
  constructor(private readonly element: ElementRef) { }

  ngOnInit(): void {
    // this.checkTripAdvisor = interval(1500).subscribe(()=> {
    //   let elements = [...this.element.nativeElement.getElementsByTagName('dt')]
    //   if (elements.filter(x=>x.innerText.indexOf('Gregs Spetses Horses')>=0).length < 2) {
    //     if (window['taValidate']) {
    //       window['taValidate']();
    //     }
    //   } else {
    //     this.checkTripAdvisor.unsubscribe();
    //   }
    // });
  }
  ngOnDestroy(): void {
    if(this.checkTripAdvisor){
      this.checkTripAdvisor.unsubscribe();
    }
  }
}
