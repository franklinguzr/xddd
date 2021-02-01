import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ZonasIndexComponent } from './zonas-index.component';

describe('ZonasIndexComponent', () => {
  let component: ZonasIndexComponent;
  let fixture: ComponentFixture<ZonasIndexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonasIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonasIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
