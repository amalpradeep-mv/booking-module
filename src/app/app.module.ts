import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { GetBookingComponent } from './get-booking/get-booking.component';
import { AllBookingComponent } from './all-booking/all-booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BookingService } from './service/service';

@NgModule({
  declarations: [
    AppComponent,
    AddBookingComponent,
    GetBookingComponent,
    AllBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClient,BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
