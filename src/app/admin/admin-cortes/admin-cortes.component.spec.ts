import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCortesComponent } from './admin-cortes.component';

describe('AdminCortesComponent', () => {
  let component: AdminCortesComponent;
  let fixture: ComponentFixture<AdminCortesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCortesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCortesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
