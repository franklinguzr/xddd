import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductoAgregarComponent } from './producto-agregar.component';

describe('ProductoAgregarComponent', () => {
  let component: ProductoAgregarComponent;
  let fixture: ComponentFixture<ProductoAgregarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
