import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { ModificarAlumno } from './modificar-alumno';

describe('ModificarAlumno', () => {
  let component: ModificarAlumno;
  let fixture: ComponentFixture<ModificarAlumno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarAlumno],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarAlumno);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
