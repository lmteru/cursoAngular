import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfMelhoresComponentComponent } from './pf-melhores-component.component';

describe('PfMelhoresComponentComponent', () => {
  let component: PfMelhoresComponentComponent;
  let fixture: ComponentFixture<PfMelhoresComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfMelhoresComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfMelhoresComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
