import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoisBtnComponent } from './dois-btn.component';

describe('DoisBtnComponent', () => {
  let component: DoisBtnComponent;
  let fixture: ComponentFixture<DoisBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoisBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoisBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
