import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/pages/authentication/login/login/login.component';
import { SignupComponent } from './modules/pages/authentication/signup/signup/signup.component';
import { NotfoundComponent } from './core/components/page-not-found/notfound/notfound.component';
import { DashboardComponent } from './modules/pages/manager/dashboard/dashboard.component';
import { EditUserComponent } from './modules/pages/manager/edit-user/edit-user/edit-user.component';
import { RoleGuard } from './core/guards/role-guard.guard';
import { AuthGuard } from './core/guards/auth-guard.guard';
import { LoginGuard } from './core/guards/login-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'MANAGER' }
  },
  {
    path: 'edit-user',
    component: EditUserComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'MANAGER' }
  },
  {
    path: 'edit-user/:id', component: EditUserComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'MANAGER' }
  },
  
  { path: 'user-dashboard', 
    loadChildren: () => import('./modules/pages/user/user.module').then(m => m.UserModule), 
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'USER' }
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