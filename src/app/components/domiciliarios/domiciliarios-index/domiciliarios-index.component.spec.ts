import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DomiciliariosIndexComponent } from './domiciliarios-index.component';

describe('DomiciliariosIndexComponent', () => {
  let component: DomiciliariosIndexComponent;
  let fixture: ComponentFixture<DomiciliariosIndexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DomiciliariosIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomiciliariosIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
