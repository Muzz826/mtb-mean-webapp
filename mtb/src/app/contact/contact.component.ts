import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.createContactForm();

    createContactForm(){
      this.contactForm = this.formBuilder.group({
        fullName: [''],
        email: [''],
        message: ['']
      });
    }
   }

  ngOnInit(): void {
  }

}
