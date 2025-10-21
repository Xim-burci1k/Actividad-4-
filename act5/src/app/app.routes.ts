import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { AgregarAlumno } from './agregar-alumno/agregar-alumno';
import { EliminarAlumno } from './eliminar-alumno/eliminar-alumno'
import { ModificarAlumno } from './modificar-alumno/modificar-alumno';
import { Alumnos } from './alumno/alumno';

export const routes: Routes = [
	{ path: 'alumno', component: AlumnoComponent },
	{ path: 'agregar-alumno',component: AgregarAlumno },
	{ path: 'modificar-alumno',component: ModificarAlumno },
	{ path: 'eliminar-alumno', component: EliminarAlumno },
];
