import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private readonly functions : AngularFireFunctions,
  ) { }
  savedForm = null;
  ridings = [
    {
      name: 'TREK',
      display: 'contact.trek',
      options: [
        { name: 'contact.trek1', price: 30 },
        { name: 'contact.trek2', price: 58 },
        { name: 'contact.trek3', price: 69 },
        { name: 'contact.trek4', price: 77 },
        { name: 'contact.trek5', price: 95 },
        { name: 'contact.trek6', price: 122 }
      ],
      selected: 0
    },
    {
      name: 'LESSON',
      display: 'contact.lesson',
      options: [
        { name: 'contact.time', time: 30, price: 20 },
        { name: 'contact.time', time: 45, price: 30 },
        { name: 'contact.time', time: 60, price: 40 }
      ],
      selected: 0
    },
    {
      name: 'GROOMING LESSON',
      display: 'contact.grooming',
      options: [
        { name: 'contact.time', time: 20, price: 10 }
      ],
      selected: 0
    },
    { name: 'PHOTO SHOOT', display: 'contact.photo', selected: null },
    // { name: 'PICNIC / PARTY', display: 'contact.picnic', selected: null }
  ];
  public makeBook(data) {
    data.created = Date.now();
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
