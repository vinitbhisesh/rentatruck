import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderBeforeLoginComponent } from './header-before-login/header-before-login.component';
import { HeaderAfterLoginComponent } from './header-after-login/header-after-login.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RegisterVehicleComponent } from './register-vehicle/register-vehicle.component';
import { AvailableVehicleComponent } from './available-vehicle/available-vehicle.component';
import { BookingComponent } from './booking/booking.component';
import { SearchVehicleComponent } from './search-vehicle/search-vehicle.component';
import { RegisterDriverComponent } from './register-driver/register-driver.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SendMaterialComponent } from './send-material/send-material.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { OrderTripComponent } from './order-trip/order-trip.component';
import { LiveAvailableLoadsComponent } from './live-available-loads/live-available-loads.component';
import { LiveAvailableTrucksComponent } from './live-available-trucks/live-available-trucks.component';
import { NotificationComponent } from './notification/notification.component';
import { FaqComponent } from './faq/faq.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
//import { HttpServiceService } from './http-service.service';
import { VehicleGroupComponent } from './vehicle-group/vehicle-group.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderBeforeLoginComponent,
    HeaderAfterLoginComponent,
    BreadcrumbComponent,
    RegisterVehicleComponent,
    AvailableVehicleComponent,
    BookingComponent,
    SearchVehicleComponent,
    RegisterDriverComponent,
    ProfileComponent,
    HomeComponent,
    AddUsersComponent,
    DashboardComponent,
    SendMaterialComponent,
    ComplaintComponent,
    OrderTripComponent,
    LiveAvailableLoadsComponent,
    LiveAvailableTrucksComponent,
    NotificationComponent,
    FaqComponent,
    ContactUsComponent,
    CompanyDetailsComponent,
    LoginComponent,
    RegisterUserComponent,
    VehicleGroupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  //providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpServiceService, multi: true }],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
