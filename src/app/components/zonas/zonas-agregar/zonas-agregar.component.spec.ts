import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ZonasAgregarComponent } from './zonas-agregar.component';

describe('ZonasAgregarComponent', () => {
  let component: ZonasAgregarComponent;
  let fixture: ComponentFixture<ZonasAgregarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonasAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonasAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
