import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ChildComponent} from './cild/child.component';
import {DataService} from './servises/data.service';
import {ConsLogService} from './servises/cons-log.service';
import {FormComponent} from './forms/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [DataService, ConsLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
