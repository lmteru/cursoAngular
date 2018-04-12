import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNameComponentComponent } from './create-name-component.component';

describe('CreateNameComponentComponent', () => {
  let component: CreateNameComponentComponent;
  let fixture: ComponentFixture<CreateNameComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNameComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNameComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
