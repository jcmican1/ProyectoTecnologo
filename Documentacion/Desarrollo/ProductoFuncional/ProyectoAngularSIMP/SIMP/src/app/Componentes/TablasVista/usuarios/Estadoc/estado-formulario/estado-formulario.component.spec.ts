import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoFormularioComponent } from './estado-formulario.component';

describe('EstadoFormularioComponent', () => {
  let component: EstadoFormularioComponent;
  let fixture: ComponentFixture<EstadoFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoFormularioComponent]
    });
    fixture = TestBed.createComponent(EstadoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
