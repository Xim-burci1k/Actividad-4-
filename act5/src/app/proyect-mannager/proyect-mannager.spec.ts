import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { ProyectMannagerComponent } from './proyect-mannager';

describe('ProyectMannagerComponent', () => {
  let component: ProyectMannagerComponent;
  let fixture: ComponentFixture<ProyectMannagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectMannagerComponent, RouterTestingModule],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectMannagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
