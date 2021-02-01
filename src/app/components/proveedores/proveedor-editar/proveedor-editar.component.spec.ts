import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProveedorEditarComponent } from './proveedor-editar.component';

describe('ProveedorEditarComponent', () => {
  let component: ProveedorEditarComponent;
  let fixture: ComponentFixture<ProveedorEditarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
