
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Componente que representa la vista de un alumno (detalle/acciones).
@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [],
  template: `<p>Componente alumno (detalle)</p>`,
  styleUrls: ['./alumno.css']
})
export class AlumnoComponent implements OnInit {
  constructor(private navegar: Router) {}

  ngOnInit(): void {}

  irAgregarAlumno(): void {
    this.navegar.navigate(['/agregar-alumno']);
  }

  irModificarAlumno(): void {
    this.navegar.navigate(['/modificar-alumno']);
  }


  irEliminarAlumno(): void {
    this.navegar.navigate(['/eliminar-alumno']);
  }
}
//nombre,edad,apellido,grado,grupo