import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectMannager } from './proyect-mannager';

describe('ProyectMannager', () => {
  let component: ProyectMannager;
  let fixture: ComponentFixture<ProyectMannager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectMannager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectMannager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
