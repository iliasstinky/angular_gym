import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

// Third-party Modules
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

// Components
import { ReservationsComponent } from './reservations/reservations.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { AddSubscriptionFormComponent } from './add-subscription-form/add-subscription-form.component';
import { AddReservationFormComponent } from './add-reservation-form/add-reservation-form.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MyreservationsComponent } from './myreservations/myreservations.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationsComponent,
    SubscriptionsComponent,
    CalendarComponent,
    DashboardsComponent,
    AdminComponent,
    HomeComponent,
    UsersComponent,
    EditUserDialogComponent,
    AddUserFormComponent,
    AddSubscriptionFormComponent,
    AddReservationFormComponent,
    LoginComponent,
    SignupComponent,
    MyreservationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    NgxMaterialTimepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
