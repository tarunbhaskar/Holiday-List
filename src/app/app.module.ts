import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HolidayListComponent } from './holiday-list/holiday-list.component';
import { HolidayDetailComponent } from './holiday-detail/holiday-detail.component';

import { HolidayListService } from './services/holiday-list.service';
import { BaseService } from './services/base.service';
import { SharedService } from './services/shared.service';


import 'rxjs/add/observable/throw';
// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@NgModule({
  declarations: [
    AppComponent,
    HolidayListComponent,
    HolidayDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HolidayListService, BaseService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
