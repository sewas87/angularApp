import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavComponent} from './nav/nav.component';
import {DataService} from './servises/data.service';
import {ConsLogService} from './servises/cons-log.service';
import {FormComponent} from './forms/form.component';
import {HttpComponent} from './http/http.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './servises/http.service';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './posts/post/post.component';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ItemComponent} from './item/item.component';
import {JoinPipe} from "./pipes/JoinPipe.pipe";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'forms', component: FormComponent},
  { path: 'http', component: HttpComponent}


]


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormComponent,
    HttpComponent,
    PostsComponent,
    PostComponent,
    HomeComponent,
    ItemComponent,
    JoinPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [DataService, ConsLogService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
