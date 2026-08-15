import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

type LoginUser = {
  email: string;
  password: string;
};

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  errorMessage = '';

  users: LoginUser[] = [
    { email: 'user1@email.com', password: 'password1' },
    { email: 'user2@email.com', password: 'password2' },
    { email: 'user3@email.com', password: 'password3' },
  ];

  constructor(private readonly router: Router) {}

  login(): void {
    const matchedUser = this.users.find(
      (user) => user.email === this.email && user.password === this.password,
    );

    if (matchedUser) {
      this.errorMessage = '';
      this.router.navigate(['/profile']);
      return;
    }

    this.errorMessage = 'Invalid email or password.';
  }
}
