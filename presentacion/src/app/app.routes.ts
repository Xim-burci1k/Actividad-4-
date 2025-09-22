import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Documentador } from './documentador/documentador';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'documentador', component: Documentador },
];
