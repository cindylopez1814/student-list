import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavComponent } from './nav/nav.component';
import { CardComponent } from './card/card.component';
import { CardStudentComponent } from './card-student/card-student.component';

import {DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardComponent,
    CardStudentComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
