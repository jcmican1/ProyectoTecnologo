import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCentralComponent } from './vista-central.component';

describe('VistaCentralComponent', () => {
  let component: VistaCentralComponent;
  let fixture: ComponentFixture<VistaCentralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaCentralComponent]
    });
    fixture = TestBed.createComponent(VistaCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
