import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LsProductoMateriaComponent } from './ls-producto-materia.component';

describe('LsProductoMateriaComponent', () => {
  let component: LsProductoMateriaComponent;
  let fixture: ComponentFixture<LsProductoMateriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LsProductoMateriaComponent]
    });
    fixture = TestBed.createComponent(LsProductoMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
