import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberiaPeluqueriaComponent } from './barberia-peluqueria.component';

describe('BarberiaPeluqueriaComponent', () => {
  let component: BarberiaPeluqueriaComponent;
  let fixture: ComponentFixture<BarberiaPeluqueriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarberiaPeluqueriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarberiaPeluqueriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
