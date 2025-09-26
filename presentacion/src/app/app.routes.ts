import { Routes } from '@angular/router';
import { Documentador } from './documentador/documentador';
<<<<<<< HEAD
import { Tester } from './tester/tester';
=======
import { Bienvenida } from './bienvenida/bienvenida';
import { Home } from './home/home';
>>>>>>> 0b8735bc975826a1511e73ffa386059da581b019

export const routes: Routes = [
	{ path: '', component: Bienvenida },
	{ path: 'home', component: Home },
	{ path: 'documentador', component: Documentador },
    { path: 'tester', component: Tester },
];
