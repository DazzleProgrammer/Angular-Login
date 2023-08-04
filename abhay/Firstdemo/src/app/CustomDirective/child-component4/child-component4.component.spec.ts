import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent4Component } from './child-component4.component';

describe('ChildComponent4Component', () => {
  let component: ChildComponent4Component;
  let fixture: ComponentFixture<ChildComponent4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildComponent4Component]
    });
    fixture = TestBed.createComponent(ChildComponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
