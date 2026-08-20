import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { Home } from './home/home';
import { Login } from './login/login';
import { Profile } from './profile/profile';

// routes that require the user to be logged in
export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'login' },
	{ path: 'login', component: Login },
	{ path: 'home', component: Home, canActivate: [authGuard] },
	{ path: 'profile', component: Profile, canActivate: [authGuard] },
	{ path: '**', redirectTo: 'login' },
];
