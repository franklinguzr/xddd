import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProveedorAgregarComponent } from './proveedor-agregar.component';

describe('ProveedorAgregarComponent', () => {
  let component: ProveedorAgregarComponent;
  let fixture: ComponentFixture<ProveedorAgregarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
