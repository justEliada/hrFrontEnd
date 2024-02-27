import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { TopBarComponent } from './core/components/top-bar/top-bar/top-bar.component';
import { CalendarComponent } from './modules/components/calendar/calendar/calendar.component';
import { LoginComponent } from './modules/pages/authentication/login/login/login.component';
import { SignupComponent } from './modules/pages/authentication/signup/signup/signup.component';
import { DashboardComponent } from './modules/pages/manager/dashboard/dashboard.component';
import { SideBarComponent } from './core/components/side-bar/side-bar/side-bar.component';
import { EditUserComponent } from './modules/pages/manager/edit-user/edit-user/edit-user.component';
import { ToastComponent } from './modules/components/toast/toast.component';
import { ModalComponent } from './modules/components/modal/modal.component';
import { CalendarModalComponent } from './modules/components/calendar-modal/calendar-modal/calendar-modal.component';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    TopBarComponent,
    SideBarComponent,
    EditUserComponent,
    CalendarComponent,
    ToastComponent,
    ModalComponent,
    CalendarModalComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule, 
    MatBadgeModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TopBarComponent,
    CalendarComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    TopBarComponent,
    SideBarComponent,
    EditUserComponent,
    CalendarComponent,
    ToastComponent,
    ModalComponent,
    CalendarModalComponent,
  ]
})
export class SharedModule { }
