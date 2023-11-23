import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdProductoMateriaComponent } from './ed-producto-materia.component';

describe('EdProductoMateriaComponent', () => {
  let component: EdProductoMateriaComponent;
  let fixture: ComponentFixture<EdProductoMateriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdProductoMateriaComponent]
    });
    fixture = TestBed.createComponent(EdProductoMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
