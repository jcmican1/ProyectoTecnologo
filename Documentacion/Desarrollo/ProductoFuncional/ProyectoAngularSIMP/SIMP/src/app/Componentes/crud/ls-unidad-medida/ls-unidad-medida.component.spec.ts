import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LsUnidadMedidaComponent } from './ls-unidad-medida.component';

describe('LsUnidadMedidaComponent', () => {
  let component: LsUnidadMedidaComponent;
  let fixture: ComponentFixture<LsUnidadMedidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LsUnidadMedidaComponent]
    });
    fixture = TestBed.createComponent(LsUnidadMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
