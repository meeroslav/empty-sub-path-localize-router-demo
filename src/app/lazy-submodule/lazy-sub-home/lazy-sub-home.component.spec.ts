import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazySubHomeComponent } from './lazy-sub-home.component';

describe('LazySubHomeComponent', () => {
  let component: LazySubHomeComponent;
  let fixture: ComponentFixture<LazySubHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazySubHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazySubHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
