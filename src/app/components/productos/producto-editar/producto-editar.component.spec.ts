import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductoEditarComponent } from './producto-editar.component';

describe('ProductoEditarComponent', () => {
  let component: ProductoEditarComponent;
  let fixture: ComponentFixture<ProductoEditarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
