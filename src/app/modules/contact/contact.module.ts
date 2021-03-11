import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactRoutingModule } from "./contact-routing.module";
import { BooksService } from "./services/books.service";
import { MessageService } from "./services/message.service";
import { BookingComponent } from "./components/booking/booking.component";
import { SendMessageComponent } from "./components/send-message/send-message.component";
import { TranslateModule } from "@ngx-translate/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ScrollToErrorDirective } from "src/app/scroll-to-error.directive";

@NgModule({
  declarations: [BookingComponent, SendMessageComponent, ScrollToErrorDirective],
  imports: [
    CommonModule,
    ContactRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
    ReactiveFormsModule,
  ],
  providers: [BooksService, MessageService],
})
export class ContactModule {}
