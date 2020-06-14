import { Injectable } from '@angular/core';
import { AngularFireFunctions } from 'angularfire2/functions';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private readonly functions : AngularFireFunctions,
  ) { }
  firebase = window['firebase'];
  savedForm = null;
  ridings = [
    {
      name: 'TREK',
      display: 'Trek',
      options: [
        { name: '1 - Coastal Road', price: 30 },
        { name: '2 - Panagia Elonas', price: 58 },
        { name: '3 - Hara Estate', price: 69 },
        { name: '4 - Hunters\' Refuge', price: 77 },
        { name: '5 - Panagia Daskalaki', price: 95 },
        { name: '6 - Profitis Ilias', price: 122 }
      ],
      selected: 0
    },
    {
      name: 'LESSON',
      display: 'Lesson',
      options: [
        { name: '30min', price: 20 },
        { name: '45min', price: 30 },
        { name: '60min', price: 40 }
      ],
      selected: 0
    },
    { name: 'PHOTO SHOOT', display: 'Photo Shoot', selected: null },
    { name: 'PICNIC / PARTY', display: 'Picnic / Party', selected: null }
  ];
  public makeBook(data) {
    return this.functions.httpsCallable('bookTime')(data);

  }
  public getTime(time, adults, kids) {
    var getTimes = this.functions.httpsCallable('getTime');
    var data = {
      time: time,
      adults: adults,
      kids: kids,
    };
    return getTimes(data).subscribe((result) =>{
      console.log(result);
      // ...
      return true;
    }, (error)=> {
      console.log(error);
      return false;
    });
  }
  public setForm(form) {
    this.savedForm = form;
  }
  public clearForm():void {
    this.savedForm = null;
  }
  get getFrom():FormGroup {
    return this.savedForm;
  }
}
