import { Component, OnInit} from '@angular/core';
import {HttpService} from "../servises/http.service";


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})


export class HttpComponent implements OnInit {
  userName = [];

  constructor(
     private http: HttpService
  ) {}

  ngOnInit() {
    this.getUserList();
  }
  getUserList() {
    this.http.getUsers()
        .subscribe((respons) => {
          this.userName = respons;
        });
  }
}
