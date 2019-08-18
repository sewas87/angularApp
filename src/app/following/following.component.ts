import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../servises/http.service';
import {debounceTime, distinctUntilChanged, filter, map, switchMap} from 'rxjs/operators';
import {startWith} from 'rxjs/internal/operators/startWith';
import {Observable} from 'rxjs';
import {fromEvent} from 'rxjs/internal/observable/fromEvent';
import {tap} from 'rxjs/internal/operators/tap';



@Component({
  selector: 'app-http',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})


export class FollowingComponent implements OnInit {
    sugestList: string[] = [];
    @ViewChild('refrehBtn', {static: true}) refrehBtn: ElementRef;
    clicks$: Observable<any>;
    constructor(
     private http: HttpService,
  ) {}

  ngOnInit() {

      this.getUsers();
  }

    getUsers() {
        this.http.getGitUsers().pipe(map(data => {
            return data.slice(0, 3);
        })).subscribe(data => this.sugestList = data);
    }
    refreshUsers() {
        this.http.refreshGitUsers().pipe(
            map(data => {
                return data.slice(0, 3);
            })).subscribe(data => this.sugestList = data);
    }

}
