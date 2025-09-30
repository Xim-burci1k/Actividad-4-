import { Routes } from '@angular/router';
import { Documentador } from './documentador/documentador';
import { Tester } from './tester/tester';
import { Bienvenida } from './bienvenida/bienvenida';
import { Home } from './home/home';

export const routes: Routes = [
	{ path: '', component: Bienvenida },
	{ path: 'home', component: Home },
	{ path: 'documentador', component: Documentador },
    { path: 'tester', component: Tester },
];
