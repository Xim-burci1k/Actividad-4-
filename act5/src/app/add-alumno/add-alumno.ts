import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatosApi } from '../servisios/datos-api';
import Notiflix from 'notiflix';

@Component({
  selector: 'app-agregar-alumno',
  imports: [FormsModule],
  templateUrl: './agregar-alumno.html',
  styleUrls: ['./agregar-alumno.css']
})
export class AgregarAlumno implements OnInit {
  // keep form-friendly Spanish field names, we'll map to the API payload on submit
  alumno: any = {
    studentId: '',
    nombre: '',
    apellidos: '',
    email: '',
    grado: '',
    semestre: '',
    grupo: '',
    especialidad: '',
    birthDate: '',
    address: '',
    phone: '',
    turno: '',
    isActive: true
  };

  constructor(private navegar: Router, private api:DatosApi) { }

  ngOnInit(): void { }

  irAlumnos(): void {
    this.navegar.navigate(['/alumnos']);
  }

  guardarAlumno(): void {
    // Basic client-side validation
    if (!this.alumno.nombre || !this.alumno.apellidos) {
      Notiflix.Notify.failure('Por favor complete el nombre y los apellidos');
      return;
    }

    // Map local form fields to the API's expected payload shape
    const payload = {
      studentId: this.alumno.studentId || '',
      name: this.alumno.nombre,
      lastName: this.alumno.apellidos,
      email: this.alumno.email || '',
      semester: this.alumno.semestre || this.alumno.grado || '',
      group: this.alumno.grupo || '',
      specialty: this.alumno.especialidad || '',
      birthDate: this.alumno.birthDate || '',
      address: this.alumno.address || '',
      phone: this.alumno.phone || '',
      isActive: typeof this.alumno.isActive === 'boolean' ? this.alumno.isActive : true
    };

    Notiflix.Loading.standard('Guardando...');
    this.api.agregarAlumno(payload).subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
        Notiflix.Notify.success('Alumno agregado exitosamente', { timeout: 3000 });
        this.navegar.navigate(['/alumnos']);
      },
      error: (error) => {
        Notiflix.Loading.remove();
        console.error('Error al guardar alumno', err);
        Notiflix.Notify.failure('Error al guardar el alumno');
      }
    });
  }

  cancelar(): void {
    this.navegar.navigate(['/alumnos']);
  }
}