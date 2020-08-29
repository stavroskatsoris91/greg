import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { BooksService } from '../../services/books.service';
import * as cloneDeep from "lodash/cloneDeep";
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  run: boolean;
  bookingForm: FormGroup;
  savedForm: FormGroup;
  riders2: FormArray;
  error: boolean = false;
  submitted = false;
  phoneNumber = "^((\\+91-?)|0)?[0-9]{10}$";
  minDate = new Date().toISOString().slice(0, 10);
  ridings = this.books.ridings;
  nextDay = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().slice(0, 10);

  title = 'contact.title';
  tsncs = 'contact.tsncs';
  safety = 'contact.safety';
  field = 'contact.field';
  requiredField = 'contact.requiredField';
  requiredName = 'contact.requiredName';
  invalidEmail = 'contact.invalidEmail';
  paymentsTitle = 'contact.paymentsTitle';
  paymentsText = [
    "contact.paymentsText.copy1",
    "contact.paymentsText.copy2",
    "contact.paymentsText.copy3",
    "contact.paymentsText.copy4",
    "contact.paymentsText.copy5"];
  cancellationTitle = 'contact.cancellationTitle';
  cancellationText = [
    "contact.cancellationText.copy1",
    "contact.cancellationText.copy2",
    "contact.cancellationText.copy3",
    "contact.cancellationText.copy4",
    "contact.cancellationText.copy5",
    "contact.cancellationText.copy6",
    "contact.cancellationText.copy7",
    "contact.cancellationText.copy8",
    "contact.cancellationText.copy9",
    "contact.cancellationText.copy10",
    "contact.cancellationText.copy11",
    "contact.cancellationText.copy12",
    "contact.cancellationText.copy13",
    "contact.cancellationText.copy14"];
  public hours = new Array(12).fill(7).map(function (x, i) { return x + i; });
  public minutes = ['00', '15', '30', '45'];
  public levels = ['contact.levels.level1', 'contact.levels.level2', 'contact.levels.level3'];
  public payments = ['contact.payments.payment1', 'contact.payments.payment2'];

  constructor(
    private books: BooksService,
    private formBuilder: FormBuilder,
    private router: Router,
    private readonly elementRef: ElementRef,
    private translate: TranslateService,
  ) { }

  ngOnInit(): void {
    this.init();
  }
  ngOnDestroy(): void {
    this.books.setForm(this.bookingForm);
  }

  private init() {
    this.bookingForm = this.books.getFrom || this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      tel: ['', [Validators.required, Validators.maxLength(50)]],
      date: [this.nextDay, [Validators.required]],
      hour: [this.hours[0], Validators.required],
      minutes: [this.minutes[0], Validators.required],
      riding: [this.ridings[0], Validators.required],
      riders: this.formBuilder.array([this.createItem]),
      rideType: this.ridings[0].options,
      message: ['', Validators.maxLength(1000)],
      payment: [this.payments[0], Validators.required],
      accept: [false, Validators.required]
    });
  }
  private get createItem(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      age: ['', [Validators.required, Validators.maxLength(4), Validators.pattern("^[0-9]*$")]],
      height: ['', [Validators.required, Validators.maxLength(4), Validators.pattern("^[0-9]*$")]],
      weight: ['', [Validators.required, Validators.maxLength(4), Validators.pattern("^[0-9]*$")]],
      level: [this.levels[0], Validators.required]
    });
  }
  get f() { return this.bookingForm.controls; }
  get riders() {
    return of(this.riderForm.value).pipe(
      map(x => x)
    );
  }
  public r(i) { return (this.riderForm.controls[i] as FormGroup).controls; }
  public get riderForm() {
    return this.bookingForm.get('riders') as FormArray;
  }
  get price() {
    var total = 0;
    const { value } = this.bookingForm;
    if (value.riding.options) {
      total = value.riding.options[value.riding.selected].price * value.riders.length;
    }
    return total ? '- €' + total : '';
  };


  addRider() {
    this.riderForm.push(this.createItem);
  };
  removeRider(i) {
    this.riderForm.removeAt(i);
  };
  scrollToElement(el: Element): void {
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  scrollToError(): void {
    const elementsWithError = this.elementRef.nativeElement.getElementsByClassName('ng-invalid');
    const secondElementWithError = elementsWithError[1];
    this.scrollToElement(secondElementWithError.previousElementSibling);
  }

  async scrollIfFormHasErrors(form: FormGroup): Promise<any> {
    await form.invalid;
    this.scrollToError();
  }
  async submitForm() {
    this.submitted = true;
    if (this.run || await this.bookingForm.invalid) {
      this.scrollToError();
      return;
    }
    this.run = true;
    var data = cloneDeep(this.bookingForm.value);
    data.riders.map((rider)=>rider.level=this.translate.instant(rider.level));
    if (data.riding.options) {
      data.riding = this.translate.instant(data.riding.display) + ' : ' + this.translate.instant(data.riding.options[data.riding.selected].name);
    } else {
      data.riding = this.translate.instant(data.riding.display);
    }
    const date = data.date.split('-').reverse().join('/') + ' ' + data.hour + ':' + data.minutes;
    data.date = date;
    data.payment = this.translate.instant(data.payment) + ' ' + this.price;
    this.books.makeBook(data).subscribe((res) => {
      this.router.navigate(['thankyou'])
      this.books.clearForm();
      this.run = false;
    }, (error) => {
      this.run = false;
    });

  };
  scrollTo(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };
}
