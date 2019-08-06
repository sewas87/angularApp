import { Component } from '@angular/core';


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

  companies: string[] = ['apple', 'samsung', 'nokia', 'lg'];
  phones = [];
  addPhone(title: string, price: number, company: string) {
    this.phones.push(new Phone(title, price, company));
  }

}
