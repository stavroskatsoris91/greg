import { Component, OnInit } from '@angular/core';
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
    'For those who love horse riding we offer riding lessons in our outdoors arena next to the view of the sea and Spetspoula island. We have private lessons and group lessons if you want to come up with friends. Or you can a enjoy a little ride in our arena for 12 euros.',
    'Apart from riding you can enjoy a picnic with your friends or organize kids’ parties with pony rides in the arena.  We also provide our horses for photoshoots for any special occasion.'
  ];
  checkTripAdvisor: any;
  constructor() { }
  ngOnInit(): void {
    this.checkTripAdvisor = interval(1500).subscribe(()=> {
      if (window['$']('dt:contains("Gregs Spetses Horses")').length !== 2) {
        if (window['taValidate']) {
          window['taValidate']();
        }
      } else {
        this.checkTripAdvisor.unsubscribe();
      }
    });
  }
  ngOnDestroy(): void {
    if(this.checkTripAdvisor){
      this.checkTripAdvisor.unsubscribe();
    }
  }
  private signUp(email, password) {
    // this.auth.signUp(email, password).then(function (res) {
    //   console.log(res);
    // });
  };
  private signIn(email, password) {
    // this.auth.signIn(email, password).then(function (res) {
    //   console.log(res);
    // });
  };
  private subscribe() {
    // this.auth.subscribe().then(function (res) {
    //   console.log(res);
    // });
  };
  private unsubscribe() {
    // this.auth.unsubscribe().then(function (res) {
    //   console.log(res);
    // });
  };
  private makeBook(time, adults, kids) {
    // this.books.makeBook(time, adults, kids).then(function (res) {
    //   console.log(res);
    // });
  };
  private getTime() {
    // this.books.getTime().then(function (res) {
    //   console.log(res);
    // });
  };
}
