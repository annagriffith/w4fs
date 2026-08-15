import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

type AuthResponse = {
  username?: string;
  birthdate?: string;
  age?: number;
  email: string;
  valid: boolean;
};

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  email = '';
  password = '';
  errorMessage = '';

  // Backend endpoint for authentication.
  private readonly authUrl = 'http://localhost:3001/api/auth';

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
  ) {}

  // If the user is already logged in, take them straight to home.
  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/home']);
    }
  }

  // Send the entered email and password to the Node server.
  login(): void {
    this.http
      .post<AuthResponse>(this.authUrl, {
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: (response) => {
          // If the response is invalid, show an error and clear any stale session.
          if (!response.valid) {
            localStorage.removeItem('currentUser');
            this.errorMessage = 'Invalid email or password';
            return;
          }

          // Store the valid user details in localStorage without the password.
          const currentUser = {
            username: response.username ?? '',
            birthdate: response.birthdate ?? '',
            age: response.age ?? 0,
            email: response.email,
            valid: true,
          };

          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          this.errorMessage = '';
          this.router.navigate(['/home']);
        },
        error: () => {
          localStorage.removeItem('currentUser');
          this.errorMessage = 'Invalid email or password';
        },
      });
  }
}
