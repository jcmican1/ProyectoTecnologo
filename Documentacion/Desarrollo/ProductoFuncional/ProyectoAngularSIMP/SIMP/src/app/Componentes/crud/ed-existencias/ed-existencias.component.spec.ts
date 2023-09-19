import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdExistenciasComponent } from './ed-existencias.component';

describe('EdExistenciasComponent', () => {
  let component: EdExistenciasComponent;
  let fixture: ComponentFixture<EdExistenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdExistenciasComponent]
    });
    fixture = TestBed.createComponent(EdExistenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
