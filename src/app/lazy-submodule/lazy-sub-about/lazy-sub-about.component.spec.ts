import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazySubAboutComponent } from './lazy-sub-about.component';

describe('LazySubAboutComponent', () => {
  let component: LazySubAboutComponent;
  let fixture: ComponentFixture<LazySubAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazySubAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazySubAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
