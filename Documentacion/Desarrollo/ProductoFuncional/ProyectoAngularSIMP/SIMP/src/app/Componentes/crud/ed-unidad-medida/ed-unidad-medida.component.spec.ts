import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdUnidadMedidaComponent } from './ed-unidad-medida.component';

describe('EdUnidadMedidaComponent', () => {
  let component: EdUnidadMedidaComponent;
  let fixture: ComponentFixture<EdUnidadMedidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdUnidadMedidaComponent]
    });
    fixture = TestBed.createComponent(EdUnidadMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
