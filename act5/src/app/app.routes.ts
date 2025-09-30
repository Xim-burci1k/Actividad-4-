
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { BienvenidaComponent } from './bienvenida/bienvenida';
import { DocumentadorComponent } from './documentador/documentador';
import { ProyectMannagerComponent } from './proyect-mannager/proyect-mannager';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'bienvenida', component: BienvenidaComponent },
	{ path: 'documentador', component: DocumentadorComponent },
	{ path: 'proyect-mannager', component: ProyectMannagerComponent },
];
