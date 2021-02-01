import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductoListarComponent } from './producto-listar.component';

describe('ProductoListarComponent', () => {
  let component: ProductoListarComponent;
  let fixture: ComponentFixture<ProductoListarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
