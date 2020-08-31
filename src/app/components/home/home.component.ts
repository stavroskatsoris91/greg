import { Component, OnInit, ElementRef } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  checkTripAdvisor: any;
  showTripAdvisor: boolean;
  constructor(private readonly element: ElementRef) { }

  ngOnInit(): void {
    this.checkTripAdvisor = interval(1000).subscribe(()=> {
      let elements = [...this.element.nativeElement.getElementsByTagName('dt')]
      if (elements.filter(x=>x.innerText.indexOf('Gregs Spetses Horses')>=0).length < 2) {
        if (window['taValidate']) {
          window['taValidate']();
        }
      } else {
        this.showTripAdvisor = true;
        this.checkTripAdvisor.unsubscribe();
      }
    });
  }
  ngOnDestroy(): void {
    if(this.checkTripAdvisor){
      this.checkTripAdvisor.unsubscribe();
    }
  }
}
