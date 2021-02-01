import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ZonasEditarComponent } from './zonas-editar.component';

describe('ZonasEditarComponent', () => {
  let component: ZonasEditarComponent;
  let fixture: ComponentFixture<ZonasEditarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonasEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
