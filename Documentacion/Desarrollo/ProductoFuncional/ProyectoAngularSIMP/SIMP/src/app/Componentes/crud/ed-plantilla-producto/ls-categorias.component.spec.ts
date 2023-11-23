import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsCategoriasComponent } from './ls-categorias.component';

describe('LsExistenciasComponent', () => {
  let component: LsCategoriasComponent;
  let fixture: ComponentFixture<LsCategoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LsCategoriasComponent]
    });
    fixture = TestBed.createComponent(LsCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
