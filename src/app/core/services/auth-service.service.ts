import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private baseUrl = 'http://localhost:8080/auth/user';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/login`, { username, password }, { observe: 'response' })
      .pipe(
        map(response => {
          if (response.status === 200 && response.body) {
            localStorage.setItem('currentUser', JSON.stringify(response.body));
            this.setAuthentication(true);
            return response.body;
          } else {
            throw new Error('Failed to login');
          }
        }),
        catchError(error => {
          localStorage.removeItem('currentUser');
          this.setAuthentication(false);
          return throwError(() => new Error('Login failed: ' + error.message));
        })
      );
  }

  getCurrentUser(): User | null {
    const userJson = localStorage.getItem('currentUser');
    if (userJson) {
      return JSON.parse(userJson);
    }
    return null;
  }

  getCurrentUserRole(): string | null {
    const user = this.getCurrentUser();
    return user?.role ?? null;
  }

  signup(user: any): Observable<any> {
    return this.http.post<User>(`${this.baseUrl}/add`, user)
      .pipe(
        map(user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.setAuthentication(true);
          return user;
        }),
        catchError(error => throwError(() => new Error('Signup failed: ' + error.message)))
      );
  }

  setAuthentication(value: boolean): void {
    if (value) {
      localStorage.setItem('isAuthenticated', 'true');
    } else {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('currentUser');
    }
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isAuthenticated');
  }

  hasRole(expectedRole: string): boolean {
    const userRole = this.getCurrentUserRole();
    return userRole === expectedRole;
  }
}
