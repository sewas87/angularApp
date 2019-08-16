import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../servises/http.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {debounceTime, distinctUntilChanged, filter, map, switchMap} from 'rxjs/operators';
import {fromEvent} from 'rxjs';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})


export class HttpComponent implements OnInit {
    usersGit: object[] = [];
    name: string;
    nameView = false;
    formId: FormGroup;
    searchInput = new FormControl('');


    constructor(
     private http: HttpService,
     private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.formId = this.fb.group({
      id: [''],
    });

    this.searchInput.valueChanges.pipe(
        filter(userName => userName !== undefined && userName.length > 2),
        debounceTime(700),
        distinctUntilChanged(),
        switchMap(userName => this.http.getGitRepos(userName))
    ).subscribe(data => {
        this.usersGit = data;
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
    // const keyUp = fromEvent(input, 'keyup');

}
