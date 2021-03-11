import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private readonly functions : AngularFireFunctions) { }
  sendMessage(data){
    data.created = Date.now();
    return this.functions.httpsCallable('newMessage')(data);
  }
}
