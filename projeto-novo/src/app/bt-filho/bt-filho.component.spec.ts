import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtFilhoComponent } from './bt-filho.component';

describe('BtFilhoComponent', () => {
  let component: BtFilhoComponent;
  let fixture: ComponentFixture<BtFilhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtFilhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
