import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsProveedorComponent } from './ls-proveedor.component';

describe('LsProveedorComponent', () => {
  let component: LsProveedorComponent;
  let fixture: ComponentFixture<LsProveedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LsProveedorComponent]
    });
    fixture = TestBed.createComponent(LsProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
