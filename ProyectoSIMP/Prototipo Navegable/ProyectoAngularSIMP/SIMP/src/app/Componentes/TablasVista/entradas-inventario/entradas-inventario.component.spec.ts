import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasInventarioComponent } from './entradas-inventario.component';

describe('EntradasInventarioComponent', () => {
  let component: EntradasInventarioComponent;
  let fixture: ComponentFixture<EntradasInventarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntradasInventarioComponent]
    });
    fixture = TestBed.createComponent(EntradasInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
