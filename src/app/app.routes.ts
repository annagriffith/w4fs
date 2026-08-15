import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { Home } from './home/home';
import { Login } from './login/login';
import { Profile } from './profile/profile';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'login', component: Login },
	{ path: 'profile', component: Profile, canActivate: [authGuard] },
];
