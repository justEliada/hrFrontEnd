import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './modules/pages/authentication/login/login/login.component';
import { SignupComponent } from './modules/pages/authentication/signup/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './modules/pages/manager/dashboard/dashboard.component';
import { SideBarComponent } from './core/components/side-bar/side-bar/side-bar.component';
import { TopBarComponent } from './core/components/top-bar/top-bar/top-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { EditUserComponent } from './modules/pages/manager/edit-user/edit-user/edit-user.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './modules/components/calendar/calendar/calendar.component';
import { UserDashboardComponent } from './modules/pages/user/dashboard/user-dashboard/user-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from './modules/components/toast/toast.component';
import { ModalComponent } from './modules/components/modal/modal.component';
import { VacationsListComponent } from './modules/pages/user/dashboard/vacations-list/vacations-list.component';
import { MatBadgeModule } from '@angular/material/badge';
import { CalendarModalComponent } from './modules/components/calendar-modal/calendar-modal/calendar-modal.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    TopBarComponent,
    SideBarComponent,
    EditUserComponent,
    CalendarComponent,
    UserDashboardComponent,
    ToastComponent,
    ModalComponent,
    VacationsListComponent,
    CalendarModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    MatBadgeModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
