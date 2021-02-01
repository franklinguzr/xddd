import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProveedorListarComponent } from './proveedor-listar.component';

describe('ProveedorListarComponent', () => {
  let component: ProveedorListarComponent;
  let fixture: ComponentFixture<ProveedorListarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
