import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Documentador } from './documentador/documentador';
import { Tester } from './tester/tester';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'documentador', component: Documentador },
    { path: 'tester', component: Tester },
];
