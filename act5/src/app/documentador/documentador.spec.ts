import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { DocumentadorComponent } from './documentador';

describe('DocumentadorComponent', () => {
  let component: DocumentadorComponent;
  let fixture: ComponentFixture<DocumentadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentadorComponent, RouterTestingModule],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
