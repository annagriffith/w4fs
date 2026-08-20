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

  // check if user is logged in
  get isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  logout(event: Event): void {
    event.preventDefault();
    // remove current user when logging out
    localStorage.removeItem('currentUser');
    // return to login page
    this.router.navigate(['/login']);
  }
}
