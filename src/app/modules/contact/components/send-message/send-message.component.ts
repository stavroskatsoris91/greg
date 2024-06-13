import { Component, NgZone, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { MessageService } from "../../services/message.service";

@Component({
  selector: "app-send-message",
  templateUrl: "./send-message.component.html",
  styleUrls: [
    "./send-message.component.scss",
    "../booking/booking.component.scss",
  ],
})
export class SendMessageComponent implements OnInit {
  messageForm: UntypedFormGroup = this.formBuilder.group({
    name: ["", [Validators.required, Validators.maxLength(50)]],
    email: [
      "",
      [Validators.required, Validators.email, Validators.maxLength(50)],
    ],
    tel: ["", [Validators.required, Validators.maxLength(50)]],
    message: ["", [Validators.required, Validators.maxLength(1000)]],
  });
  submitted: boolean;
  run: boolean;

  messenger = './assets/images/contact/messenger.svg';
  whatsapp = './assets/images/contact/whatsapp.svg';
  constructor(
    private readonly formBuilder: UntypedFormBuilder,
    private router: Router,
    private translate: TranslateService,
    private zone: NgZone,
    private message: MessageService
  ) {}

  ngOnInit(): void {}

  get validate() {
    return this.messageForm.controls;
  }

  public async submitForm() {
    this.submitted = true;
    if (this.messageForm.valid && !this.run) {
      const data = this.messageForm.value;
      this.run = true;
      this.message.sendMessage(data).then(
        (res) => {
          this.zone.run(() => {
            const language = this.translate.currentLang ?? this.translate.defaultLang;
            this.run = false;
            this.router.navigate([language,'contact', 'thankyou']);
          });
        },
        (error) => {
          this.run = false;
          return;
        }
      );
    }
  }
}
