import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTratamientosComponent } from './admin-tratamientos.component';

describe('AdminTratamientosComponent', () => {
  let component: AdminTratamientosComponent;
  let fixture: ComponentFixture<AdminTratamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminTratamientosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTratamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
