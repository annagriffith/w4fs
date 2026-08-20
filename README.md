# Workshop 4 and Workshop 5 Angular Project

This project is a simple Angular app with login, profile editing, and protected pages.

## Workshop 4 commands used

```bash
ng new week4
npm install bootstrap --save
ng generate component home
ng generate component login
ng generate component profile
ng serve
```

## Workshop 5 updates

A `server` folder was added to the project to handle authentication.

```bash
cd server
npm init
npm install express cors
```

To start the backend server:

```bash
cd server
npm start
```

To start the Angular app:

```bash
npm start
```

## Project features

- Login form sends the email and password to `/api/auth`
- A valid user is checked against a fixed array of users
- The logged-in user is stored in `localStorage`
- The profile page loads the current user and allows editing
- Protected pages use an AuthGuard
- Logout clears the current user and redirects back to login

## Example valid login

```text
Email: anna@student.edu
Password: anna123
```
