import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


export class Phone {
  constructor(
   private title: string,
   private price: number,
   private company: string
  ) {}
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})



export class FormComponent {

  userForm: FormGroup;

  constructor(
      private fb: FormBuilder
  ) {
    this.userForm = fb.group({
      userName: ['tom'],
      userEmail: ['', Validators.email],
      userPhone: fb.array([
        ['+380']
      ])

    });
  }
  submit() {
    console.log(this.userForm.value);
  }
  addPhone() {
    (<FormArray>this.userForm.controls["userPhone"]).push(new FormControl("+380"));
  }
  companies: string[] = ['apple', 'samsung', 'nokia', 'lg'];
  phones = [];
  addSmartphone(title: string, price: number, company: string) {
    this.phones.push(new Phone(title, price, company));
  }

}
