import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DomiciliariosListarComponent } from './domiciliarios-listar.component';

describe('DomiciliariosListarComponent', () => {
  let component: DomiciliariosListarComponent;
  let fixture: ComponentFixture<DomiciliariosListarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DomiciliariosListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomiciliariosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
