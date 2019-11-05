import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterDriverComponent } from './register-driver/register-driver.component';
import { RegisterVehicleComponent } from './register-vehicle/register-vehicle.component';
import { SearchVehicleComponent } from './search-vehicle/search-vehicle.component';
import { AvailableVehicleComponent } from './available-vehicle/available-vehicle.component';
import { BookingComponent } from './booking/booking.component';
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
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { VehicleGroupComponent } from './vehicle-group/vehicle-group.component';
import { AllStatusComponent } from './all-status/all-status.component';

//const routes: Routes = [];

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'driver', component: RegisterDriverComponent },
  { path: 'vehicle', component: RegisterVehicleComponent },
  { path: 'searchvehicle', component: SearchVehicleComponent },
  { path: 'availablevehicle', component: AvailableVehicleComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'addusers', component: AddUsersComponent },
  { path: 'sendmaterial', component: SendMaterialComponent },
  { path: 'complaint', component: ComplaintComponent },
  { path: 'orderTrip', component: OrderTripComponent },
  { path: 'liveAvailableLoads', component: LiveAvailableLoadsComponent },
  { path: 'liveAvailableTrucks', component: LiveAvailableTrucksComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'companyDetails', component: CompanyDetailsComponent },
  { path: 'vehicleGroup', component: VehicleGroupComponent },
  { path: 'allStatus', component: AllStatusComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
