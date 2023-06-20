import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioGeneralComponent } from './inventario-general.component';

describe('InventarioGeneralComponent', () => {
  let component: InventarioGeneralComponent;
  let fixture: ComponentFixture<InventarioGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventarioGeneralComponent]
    });
    fixture = TestBed.createComponent(InventarioGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
