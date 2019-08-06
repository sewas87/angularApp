import { Component } from '@angular/core';
import {DataService} from './servises/data.service';

class Item {
  name: string;
  price: number;
  status: boolean;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
    this.status = true;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  price: number;
  name: string;
  nameUser = 'Tom';
  modelsList: string[] = [];
  text: any;
  items = [
    {name: 'pos1', price: 12, status: false},
    {name: 'pos2', price: 12, status: false},
  ];
  constructor(
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.modelsList = this.dataService.getData();
  }

  addData(text: string) {
    this.dataService.setData(text);
  }

  addItem(text: string, numb: number) {
    if ( text == null || numb == null ) { return; }
    this.items.push(new Item( text, numb ));
  }



}
