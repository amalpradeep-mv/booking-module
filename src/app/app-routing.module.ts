import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { AllBookingComponent } from './all-booking/all-booking.component';
import { GetBookingComponent } from './get-booking/get-booking.component';

const routes: Routes = [
  { path:'add-booking', component:AddBookingComponent},
  { path:'getbooking', component:GetBookingComponent},
  { path: 'allbooking', component:AllBookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
