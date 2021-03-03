import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-send-message",
  templateUrl: "./send-message.component.html",
  styleUrls: ["./send-message.component.scss","../contact/contact.component.scss"],
})
export class SendMessageComponent implements OnInit {
  
  messageForm: FormGroup = this.formBuilder.group({
    name: ["", [Validators.required, Validators.maxLength(50)]],
    email: [
      "",
      [Validators.required, Validators.email, Validators.maxLength(50)],
    ],
    tel: ["", [Validators.required, Validators.maxLength(50)]],
    message: ["", [Validators.required, Validators.maxLength(1000)]],
  });
  submitted: boolean
  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {}
  get validate() { return this.messageForm.controls; }

  public submitForm(){
    this.submitted = true;
    if(this.messageForm.valid){

    }
  }
}
