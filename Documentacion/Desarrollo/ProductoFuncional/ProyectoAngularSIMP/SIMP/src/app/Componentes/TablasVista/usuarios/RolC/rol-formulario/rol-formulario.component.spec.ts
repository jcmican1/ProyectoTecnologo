import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolFormularioComponent } from './rol-formulario.component';

describe('RolFormularioComponent', () => {
  let component: RolFormularioComponent;
  let fixture: ComponentFixture<RolFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolFormularioComponent]
    });
    fixture = TestBed.createComponent(RolFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
