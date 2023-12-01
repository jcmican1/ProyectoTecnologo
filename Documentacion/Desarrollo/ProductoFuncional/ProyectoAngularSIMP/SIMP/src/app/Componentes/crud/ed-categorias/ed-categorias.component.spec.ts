import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdCategoriasComponent } from './ed-categorias.component';

describe('EdCategoriasComponent', () => {
  let component: EdCategoriasComponent;
  let fixture: ComponentFixture<EdCategoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdCategoriasComponent]
    });
    fixture = TestBed.createComponent(EdCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
