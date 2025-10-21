import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DatosApi } from '../servicios/datos-api';
import { firstValueFrom } from 'rxjs';
import Notiflix from 'notiflix';

// Componente que representa la vista de listado de alumnos.
@Component({
  // selector: nombre de la etiqueta HTML del componente
  selector: 'app-alumnos',
  // imports: dependencias standalone necesarias (ninguna por ahora)
  imports: [CommonModule],
  // templateUrl: plantilla HTML asociada
  templateUrl: './alumnos.html',
  // styleUrls: estilos CSS asociados (corregido)
  styleUrls: ['./alumnos.css']
})
export class Alumnos implements OnInit {
  alumnos: any[] = [];
  // debug: guardar respuesta cruda para inspección en la UI
  rawResponse: any = null;
  constructor(
    private navegar: Router,
    private ServicioApi: DatosApi,
    private detectarCambios: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  // ngOnInit: initialize component and load alumnos only on the browser
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.cargarAlumno();
    } else {
      // Skip API call during server prerender to avoid network/DNS errors
      console.log('Skipping cargarAlumno during server prerender');
    }
  }

  async cargarAlumno(){
    try{
  const registros: any = await firstValueFrom(this.ServicioApi.getAlumnos());
  // guardar y mostrar respuesta cruda para depuración
  this.rawResponse = registros;
  console.log('Respuesta cruda getAlumnos():', registros);

      // Normalizar la respuesta (la API puede devolver un array o un objeto con students)
      let lista: any[] = [];
      if (Array.isArray(registros)) {
        lista = registros;
      } else if (registros && Array.isArray(registros.students)) {
        lista = registros.students;
      } else if (registros && Array.isArray(registros.data)) {
        lista = registros.data;
      } else {
        // si la respuesta no contiene lista, intentar recopilar claves que parecen objetos
        lista = [];
      }

      // Mapear campos de la API (en inglés) a los campos que usa la plantilla (español)
      this.alumnos = lista.map(item => ({
        nombre: item.name || item.nombre || '',
        apellidos: item.lastName || item.apellidos || '',
        grado: item.semester || item.grado || '',
        grupo: item.group || item.grupo || '',
        especialidad: item.specialty || item.especialidad || '',
        turno: item.turn || item.turno || ''
      }));

      this.detectarCambios.detectChanges();

      Notiflix.Notify.info('Alumnos cargados');
    }catch(error){
      console.error('Error al cargar los alumnos:', error);
      Notiflix.Notify.failure('Error al cargar los alumnos (ver consola)');
      this.alumnos = [
      ];
      this.detectarCambios.detectChanges();
    }
  }
    irAgregarAlumno(): void {
    this.navegar.navigate(['/agregar-alumno']);
  }

  irModificarAlumno(): void {
    this.navegar.navigate(['/modificar-alumno']);
  }

  irEliminarAlumno(): void {
    Notiflix.Notify.warning('Funcionalidad de eliminar no implementada aún');
  }
}