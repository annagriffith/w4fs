import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';
import { Loginrequest, LoginResponse } from '../interfaces/loginrequest';

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

  private readonly auth = inject(Auth);
  private readonly router = inject(Router);

  // go to home if already logged in
  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/home']);
    }
  }

  login(): void {
    // send login details to server
    const credentials: Loginrequest = {
        email: this.email,
        password: this.password,
    };

    this.auth
      .login(credentials)
      .subscribe({
        next: (response: LoginResponse) => {
          // check if login was successful
          if (!response.valid) {
            localStorage.removeItem('currentUser');
            this.errorMessage = 'Invalid email or password';
            return;
          }

          // save logged in user without password
          const currentUser = {
            username: response.username ?? '',
            birthdate: response.birthdate ?? '',
            age: response.age ?? 0,
            email: response.email,
            valid: true,
          };

          // convert user object to string for local storage
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          this.errorMessage = '';
          // go to home page after login
          this.router.navigate(['/home']);
        },
        error: () => {
          localStorage.removeItem('currentUser');
          // show error if login is wrong
          this.errorMessage = 'Invalid email or password';
        },
      });
  }
}
