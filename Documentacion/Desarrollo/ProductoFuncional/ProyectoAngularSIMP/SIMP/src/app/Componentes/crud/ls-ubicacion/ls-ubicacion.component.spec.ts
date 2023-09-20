import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsUbicacionComponent } from './ls-ubicacion.component';

describe('LsUbicacionComponent', () => {
  let component: LsUbicacionComponent;
  let fixture: ComponentFixture<LsUbicacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LsUbicacionComponent]
    });
    fixture = TestBed.createComponent(LsUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
