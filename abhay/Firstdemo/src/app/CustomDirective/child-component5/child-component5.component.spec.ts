import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent5Component } from './child-component5.component';

describe('ChildComponent5Component', () => {
  let component: ChildComponent5Component;
  let fixture: ComponentFixture<ChildComponent5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildComponent5Component]
    });
    fixture = TestBed.createComponent(ChildComponent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
