import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsMovimientoComponent } from './ls-movimiento.component';

describe('LsMovimientoComponent', () => {
  let component: LsMovimientoComponent;
  let fixture: ComponentFixture<LsMovimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LsMovimientoComponent]
    });
    fixture = TestBed.createComponent(LsMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
