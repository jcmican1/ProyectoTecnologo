import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdUbicacionComponent } from './ed-ubicacion.component';

describe('EdUbicacionComponent', () => {
  let component: EdUbicacionComponent;
  let fixture: ComponentFixture<EdUbicacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdUbicacionComponent]
    });
    fixture = TestBed.createComponent(EdUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
