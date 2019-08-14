import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()

export class HttpService {
    constructor(
        private httpClient: HttpClient
    ) {}
    getUsers(): Observable<any> {
       return this.httpClient.get('https://jsonplaceholder.typicode.com/users').pipe(map(respons => {
           const userName = respons as Array<any>;
           return userName.map( item => item.name);
       }));
    }
    getById(id: number): Observable<any> {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/users/' + id);
    }
    getPosts(): Observable<any> {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/posts?userId=1');
    }
    sendPost(postBody): Observable<any> {
        return  this.httpClient.post('https://jsonplaceholder.typicode.com/posts?userId=1', postBody);
    }
}

