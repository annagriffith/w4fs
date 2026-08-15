import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private readonly router: Router) {}

  // Check whether a current user is stored in localStorage.
  get isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  // Remove the current user and send them back to the login page.
  logout(event: Event): void {
    event.preventDefault();
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
