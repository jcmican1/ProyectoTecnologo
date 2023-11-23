import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdProductoMateriaPrimaComponent } from './ed-producto-materia-prima.component';

describe('EdExistenciasComponent', () => {
  let component: EdProductoMateriaPrimaComponent;
  let fixture: ComponentFixture<EdProductoMateriaPrimaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdProductoMateriaPrimaComponent]
    });
    fixture = TestBed.createComponent(EdProductoMateriaPrimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
