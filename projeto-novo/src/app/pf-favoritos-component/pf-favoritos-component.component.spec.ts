import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfFavoritosComponentComponent } from './pf-favoritos-component.component';

describe('PfFavoritosComponentComponent', () => {
  let component: PfFavoritosComponentComponent;
  let fixture: ComponentFixture<PfFavoritosComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfFavoritosComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfFavoritosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
