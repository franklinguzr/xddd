import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductoIndexComponent } from './producto-index.component';

describe('ProductoIndexComponent', () => {
  let component: ProductoIndexComponent;
  let fixture: ComponentFixture<ProductoIndexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
