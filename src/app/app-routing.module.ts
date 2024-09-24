import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { UsersComponent } from './users/users.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { AddSubscriptionFormComponent } from './add-subscription-form/add-subscription-form.component';
import { AddReservationFormComponent } from './add-reservation-form/add-reservation-form.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MyreservationsComponent } from './myreservations/myreservations.component';

const routes: Routes = [
  {path : "" , component : LoginComponent},
  {path: "home", component : HomeComponent},
  {path: "calendar", component : CalendarComponent},
  {path: "reservations", component : ReservationsComponent},
  {path: "subscriptions", component : SubscriptionsComponent},
  {path: "home", component : HomeComponent},
  {path: "users", component : UsersComponent},
  {path: "add_users", component : AddUserFormComponent},
  {path: "add_subscription", component : AddSubscriptionFormComponent},
  {path: "add_reservation", component : AddReservationFormComponent},
  {path: "loginpage", component : LoginComponent},
  {path : "signup" , component : SignupComponent},
  {path : "myreservations" , component : MyreservationsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
