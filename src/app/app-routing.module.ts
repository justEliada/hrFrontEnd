import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/pages/authentication/login/login/login.component';
import { SignupComponent } from './modules/pages/authentication/signup/signup/signup.component';
import { NotfoundComponent } from './core/components/page-not-found/notfound/notfound.component';
import { DashboardComponent } from './modules/pages/manager/dashboard/dashboard.component';
import { EditUserComponent } from './modules/pages/manager/edit-user/edit-user/edit-user.component';
import { CalendarComponent } from './modules/components/calendar/calendar/calendar.component';
import { UserDashboardComponent } from './modules/pages/user/dashboard/user-dashboard/user-dashboard.component';
import { VacationsListComponent } from './modules/pages/user/dashboard/vacations-list/vacations-list.component';
import { RoleGuard } from './core/guards/role-guard.guard';
import { AuthGuard } from './core/guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  { 
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { expectedRole: 'manager' } 
  },
  { 
    path: 'edit-user',
    component: EditUserComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { expectedRole: 'manager' } 
  },
  { path: 'edit-user/:id', component: EditUserComponent, 
  canActivate: [AuthGuard, RoleGuard],
    data: { expectedRole: 'manager' } 
  },
  { 
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { expectedRole: 'user' } 
  },
  { 
    path: 'vacations-list', component: VacationsListComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { expectedRole: 'user'} 
  },
  { 
    path: '**',
    component: NotfoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }