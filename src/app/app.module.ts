import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChildComponent} from './cild/child.component';
import {DataService} from './servises/data.service';
import {ConsLogService} from './servises/cons-log.service';
import {FormComponent} from './forms/form.component';
import {HttpComponent} from "./http/http.component";
import {HttpClientModule} from "@angular/common/http";
import {HttpService} from "./servises/http.service";

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    FormComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService, ConsLogService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
