import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdMovimientoComponent } from './ed-movimiento.component';

describe('EdMovimientoComponent', () => {
  let component: EdMovimientoComponent;
  let fixture: ComponentFixture<EdMovimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdMovimientoComponent]
    });
    fixture = TestBed.createComponent(EdMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
