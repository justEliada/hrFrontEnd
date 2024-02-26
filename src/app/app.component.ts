import { Component } from '@angular/core';
import { Router, Event as RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hrAngularProject';
  showTopAndSideBar = true;
  searchText = ''; 
  
  onSearch(text: string): void {
    console.log('Search text received in AppComponent:', text); 
    this.searchText = text;
  }
  

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const pathsWithoutBars = ['/', '/login', '/signup', '/**'];
      this.showTopAndSideBar = !pathsWithoutBars.includes(event.urlAfterRedirects);
    });
  }
}
