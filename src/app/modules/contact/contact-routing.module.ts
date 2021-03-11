import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { SendMessageComponent } from './components/send-message/send-message.component';




const routes: Routes = [
  { path: '',  redirectTo: 'booking', pathMatch: 'full' },
  {
    path:'booking',
    component: BookingComponent
  },
  {
    path:'message',
    component: SendMessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }