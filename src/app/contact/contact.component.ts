import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // name: string = '';
  // phone: string = '';
  // email: string = '';
  // message: string = '';
name1 = '';

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.compose([Validators.maxLength(3), Validators.required])),
  })

  summary: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onContactSubmit(inputEvent: any) {
    console.log('on submit clicked', inputEvent);
  }

  onInputChanged(changedField: string , inputEvent: any) {
    console.log(`Input changed on ${changedField} - Current value: ${inputEvent.target.value}`);
  }

  onSubmit() {
    console.log(this.contactForm.controls.name.value)
    // this.summary = `A person with the name of ${this.name} and a phone number of: ${this.phone} with an email: ${this.email}
    // wrote you a message: ${this.message}`
    this.summary = `
    A person with the name of ${this.contactForm.value.name} and a phone number of ${this.contactForm.value.phone}
     with an email: ${this.contactForm.value.email} wrote you a message: ${this.contactForm.value.message}
    `
  }

  toggleForm() {
    if (this.contactForm.controls.email.disabled) {
      // this.contactForm.controls.email.disable();
      this.contactForm.controls.email.enable();
    } else {
    this.contactForm.controls.email.disable();
    }
  }

}
