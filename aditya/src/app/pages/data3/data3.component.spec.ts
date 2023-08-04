import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DATA3Component } from './data3.component';

describe('DATA3Component', () => {
  let component: DATA3Component;
  let fixture: ComponentFixture<DATA3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DATA3Component]
    });
    fixture = TestBed.createComponent(DATA3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
