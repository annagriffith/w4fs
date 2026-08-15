import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

type CurrentUser = {
  username: string;
  birthdate: string;
  age: number;
  email: string;
  valid: boolean;
};

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  username = '';
  birthdate = '';
  age = 0;
  email = '';
  valid = false;
  successMessage = '';

  ngOnInit(): void {
    const storedUser = localStorage.getItem('currentUser');
    if (!storedUser) {
      return;
    }

    const currentUser = JSON.parse(storedUser) as CurrentUser;
    this.username = currentUser.username;
    this.birthdate = currentUser.birthdate;
    this.age = currentUser.age;
    this.email = currentUser.email;
    this.valid = currentUser.valid;
  }

  saveProfile(): void {
    const updatedUser: CurrentUser = {
      username: this.username,
      birthdate: this.birthdate,
      age: this.age,
      email: this.email,
      valid: this.valid,
    };

    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    this.successMessage = 'Profile updated successfully.';
  }
}
