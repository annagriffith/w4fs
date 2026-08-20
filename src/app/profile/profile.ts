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

  // load user details when profile page opens
  ngOnInit(): void {
    // get current user from local storage
    const storedUser = localStorage.getItem('currentUser');
    if (!storedUser) {
      return;
    }

    // convert stored string back to user object
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

    // save updated profile back to local storage
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    // show message after profile is updated
    this.successMessage = 'Profile updated successfully.';
  }
}
