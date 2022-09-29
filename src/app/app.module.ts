import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeMainSectionComponent } from './home-main-section/home-main-section.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { SlotsComponent } from './dashboard/slots/slots.component';
import { BookingsComponent } from './dashboard/bookings/bookings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookslotComponent } from './dashboard/bookslot/bookslot.component';


import { BookingService } from '../app/bookings.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AddSlotComponent } from './admin/admin-dashboard/add-slot/add-slot.component';
import { AllbookingsComponent } from './admin/admin-dashboard/allbookings/allbookings.component';
import { PaymentComponent } from './dashboard/payment/payment.component';
import { AddMovieComponent } from './admin/admin-dashboard/add-movie/add-movie.component';
import { AddSeatComponent } from './admin/admin-dashboard/add-seat/add-seat.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeMainSectionComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    SlotsComponent,
    BookingsComponent,
    DashboardComponent,
    BookslotComponent,
    HeaderLoginComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AddSlotComponent,
    AllbookingsComponent,
    PaymentComponent,
    AddMovieComponent,
    AddSeatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
