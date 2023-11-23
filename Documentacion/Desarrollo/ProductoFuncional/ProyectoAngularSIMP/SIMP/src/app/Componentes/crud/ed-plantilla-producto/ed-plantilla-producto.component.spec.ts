import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdPlantillaProductoComponent } from './ed-plantilla-producto.component';
describe('EdPlantillaProductoComponent', () => {
  let component: EdPlantillaProductoComponent;
  let fixture: ComponentFixture<EdPlantillaProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdPlantillaProductoComponent]
    });
    fixture = TestBed.createComponent(EdPlantillaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
