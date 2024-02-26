import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  userName: string = 'Hello';
  userRole: string = 'Default Role';

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit() {
    this.loadUserInfo();
    this.navigateToDashboard();
  }

  loadUserInfo() {
    const userData = this.authService.getCurrentUser();
    this.userName = userData?.username || 'Hello';
    this.userRole = userData?.role || 'Default Role';
  }

  navigateToDashboard() {
    const userRole = this.userRole.toUpperCase(); 
    switch(userRole) {
      case 'MANAGER':
        this.router.navigate(['/dashboard']);
        break;
      case 'USER':
        this.router.navigate(['/user-dashboard']);
        break;
      default:
        console.error('Unexpected role:', userRole);
        break;
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); 
  }
}
