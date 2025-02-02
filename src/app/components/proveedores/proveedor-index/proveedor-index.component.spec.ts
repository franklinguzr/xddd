import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProveedorIndexComponent } from './proveedor-index.component';

describe('ProveedorIndexComponent', () => {
  let component: ProveedorIndexComponent;
  let fixture: ComponentFixture<ProveedorIndexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
