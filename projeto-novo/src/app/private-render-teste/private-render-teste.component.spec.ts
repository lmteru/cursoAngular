import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateRenderTesteComponent } from './private-render-teste.component';

describe('PrivateRenderTesteComponent', () => {
  let component: PrivateRenderTesteComponent;
  let fixture: ComponentFixture<PrivateRenderTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateRenderTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateRenderTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
