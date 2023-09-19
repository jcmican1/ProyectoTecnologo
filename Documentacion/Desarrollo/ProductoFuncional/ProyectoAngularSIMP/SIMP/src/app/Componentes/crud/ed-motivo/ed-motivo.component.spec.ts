import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdMotivoComponent } from './ed-motivo.component';

describe('EdMotivoComponent', () => {
  let component: EdMotivoComponent;
  let fixture: ComponentFixture<EdMotivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdMotivoComponent]
    });
    fixture = TestBed.createComponent(EdMotivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
