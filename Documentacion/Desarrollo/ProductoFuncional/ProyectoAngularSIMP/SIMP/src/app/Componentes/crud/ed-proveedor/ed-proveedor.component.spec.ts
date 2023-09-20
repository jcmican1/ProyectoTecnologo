import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdProveedorComponent } from './ed-proveedor.component';

describe('EdProveedorComponent', () => {
  let component: EdProveedorComponent;
  let fixture: ComponentFixture<EdProveedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdProveedorComponent]
    });
    fixture = TestBed.createComponent(EdProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
