import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Documentador } from './documentador';

describe('Documentador', () => {
  let component: Documentador;
  let fixture: ComponentFixture<Documentador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Documentador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Documentador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
