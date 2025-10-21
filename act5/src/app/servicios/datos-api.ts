import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosApi {
  private apiUrl: string = 'https://apialumnos-il0w.onrender.com/api/';

  constructor(
    private http: HttpClient
  ) { }

  getAlumnos(): Observable<any> {
    return this.http.get(this.apiUrl + 'students');
  }
  
  agregarAlumno(alumno: any): Observable<any> {
    return this.http.post(this.apiUrl + 'students/new', alumno);
  }
}
