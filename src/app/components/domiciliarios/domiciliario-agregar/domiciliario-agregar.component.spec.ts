import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DomiciliarioAgregarComponent } from './domiciliario-agregar.component';

describe('DomiciliarioAgregarComponent', () => {
  let component: DomiciliarioAgregarComponent;
  let fixture: ComponentFixture<DomiciliarioAgregarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DomiciliarioAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomiciliarioAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
