import { Component, OnInit } from '@angular/core';

type CurrentUser = {
  username: string;
};

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  username = '';

  // Read the currently logged-in user from localStorage to show their name.
  ngOnInit(): void {
    const storedUser = localStorage.getItem('currentUser');
    if (!storedUser) {
      return;
    }

    const currentUser = JSON.parse(storedUser) as CurrentUser;
    this.username = currentUser.username;
  }
}
