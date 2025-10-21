import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { EliminarAlumno } from './eliminar-alumno';

describe('EliminarAlumno', () => {
  let component: EliminarAlumno;
  let fixture: ComponentFixture<EliminarAlumno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarAlumno],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarAlumno);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
