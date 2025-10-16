import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAlumno } from './eliminar-alumno';

describe('EliminarAlumno', () => {
  let component: EliminarAlumno;
  let fixture: ComponentFixture<EliminarAlumno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarAlumno]
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
