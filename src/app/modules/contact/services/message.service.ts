import { Injectable, inject } from '@angular/core';
import { Functions, httpsCallable } from '@angular/fire/functions';

@Injectable()
export class MessageService {

  constructor(private readonly functions : Functions) { }
  sendMessage(data){
    data.created = Date.now();
    return httpsCallable(this.functions, 'newMessage')(data);
  }
}
