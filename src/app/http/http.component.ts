import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../servises/http.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime, map} from 'rxjs/operators';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})

export class HttpComponent implements OnInit {
    userName = [];
  name: string;
  nameView = false;
  formId: FormGroup;


    constructor(
     private http: HttpService,
     private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.formId = this.fb.group({
      id: [''],
    });
    this.getUserList();
  }
  getUserList() {
    this.http.getUsers()
        .subscribe((respons) => {
          this.userName = respons;
        });
  }
  getUserId() {
    const id = this.formId.value.id;
    this.http.getById(id)
        .subscribe((response) => {
          this.name = response.name;
          console.log(this.name);
          this.nameView = true;
        });
  }
}


