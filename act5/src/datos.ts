import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Datos {

  private listadealunos: BehaviorSubject<any> = new BehaviorSubject<any[]>([]);//se tiene que hacer para que este en diferentes componentes

  constructor(){}
  alumnos: any[] = [
    { id: 1, nombre: 'juan', apellido: 'perez', edad: 20 },
    { id: 2, nombre: 'maria', apellido: 'lopez', edad: 19 },
    { id: 3, nombre: 'carlos', apellido: 'ramirez', edad: 21 },
    { id: 4, nombre: 'ana', apellido: 'gonzalez', edad: 22 },
    { id: 5, nombre: 'luis', apellido: 'martinez', edad: 18 },
    { id: 6, nombre: 'sofia', apellido: 'hernandez', edad: 20 }
  ];
}