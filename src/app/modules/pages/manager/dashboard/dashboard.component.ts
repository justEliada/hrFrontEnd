import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserResponseDto } from 'src/app/core/models/userResponse.model';
import { UserService } from 'src/app/modules/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']

})
export class DashboardComponent implements OnInit {
  isFilterApplied = false;
  users: UserResponseDto[] = [];
  allUsers: UserResponseDto[] = [];

  @Input() searchText: string = '';
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadAllUsers();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('DashboardComponent: ngOnChanges', changes);
    if (changes['searchText'] && !changes['searchText'].firstChange) {
      this.filterUsers(changes['searchText'].currentValue);
    }
  }

  loadAllUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.allUsers = data.filter(user => user.id !== 1);
        this.users = [...this.allUsers];
      },
      error: (e) => console.error(e)
    });
  }

  handleSearch(searchText: string): void {
    this.filterUsers(searchText);
  }

  editUser(userId: number): void {
    console.log(`Navigating to edit user with ID: ${userId}`);
    this.router.navigate(['/edit-user', userId]).catch(err => console.error('Navigation error:', err));
  }
  
  filterUsers(text: string): void {
    if (!text) {
      this.users = [...this.allUsers];
      return;
    }
    this.users = this.allUsers.filter(user =>
      user.firstName.toLowerCase().includes(text.toLowerCase()) ||
      user.lastName.toLowerCase().includes(text.toLowerCase())
    );
  }

  // filterUsersByLeastCreatedTimeSheet(): void {
  //   this.userService.getUsersByLeastCreatedTimeSheet().subscribe({
  //     next: (filteredUsers) => {
  //       this.users = filteredUsers;
  //     },
  //     error: (e) => console.error(e)
  //   });
  // }

  toggleFilter(): void {
    if (this.isFilterApplied) {
      this.loadAllUsers();
      this.isFilterApplied = false;
    } else {
      this.userService.getUsersByLeastCreatedTimeSheet().subscribe({
        next: (filteredUsers) => {
          this.users = filteredUsers;
          this.isFilterApplied = true;
        },
        error: (e) => console.error(e)
      });
    }
  }


  deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe({
        next: (response) => {
          console.log(response);
          this.users = this.users.filter(user => user.id !== id);
        },
        error: (e) => {
          console.error('Error deleting user:', e);
          alert('Failed to delete user. Please try again.');
        }
      });
    }
  }
}



