import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsExistenciasComponent } from './ls-existencias.component';

describe('LsExistenciasComponent', () => {
  let component: LsExistenciasComponent;
  let fixture: ComponentFixture<LsExistenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LsExistenciasComponent]
    });
    fixture = TestBed.createComponent(LsExistenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
