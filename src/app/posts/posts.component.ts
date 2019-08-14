import { Component, OnInit} from '@angular/core';
import {HttpService} from '../servises/http.service';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})


export class PostsComponent implements OnInit {
  name: string;
  postsList: object[] = [];
  nameView = false;
  formPost: FormGroup;

  constructor(
     private http: HttpService,
     private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.formPost = this.fb.group({
        postText: ['']
      });
    this.getPostList();

  }
  getPostList() {
      this.http.getPosts()
          .subscribe(respons => this.postsList = respons);
  }
    addPost() {
      const result = Object.assign({title: this.formPost.value.postText, body: 'test', useId: 10});
      this.http.sendPost(result)
          .subscribe( respons => {
              this.postsList.push(respons);
              }
          );
    }

}


