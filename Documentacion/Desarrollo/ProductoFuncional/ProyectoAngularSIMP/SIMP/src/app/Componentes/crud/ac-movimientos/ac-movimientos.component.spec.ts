import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcMovimientosComponent } from './ac-movimientos.component';

describe('AcMovimientosComponent', () => {
  let component: AcMovimientosComponent;
  let fixture: ComponentFixture<AcMovimientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcMovimientosComponent]
    });
    fixture = TestBed.createComponent(AcMovimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
