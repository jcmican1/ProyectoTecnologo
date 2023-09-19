import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsMotivoComponent } from './ls-motivo.component';

describe('LsMotivoComponent', () => {
  let component: LsMotivoComponent;
  let fixture: ComponentFixture<LsMotivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LsMotivoComponent]
    });
    fixture = TestBed.createComponent(LsMotivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
