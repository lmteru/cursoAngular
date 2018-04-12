import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfMenuComponentComponent } from './pf-menu-component.component';

describe('PfMenuComponentComponent', () => {
  let component: PfMenuComponentComponent;
  let fixture: ComponentFixture<PfMenuComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfMenuComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfMenuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
