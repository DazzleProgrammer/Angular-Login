import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DATA2Component } from './data2.component';

describe('DATA2Component', () => {
  let component: DATA2Component;
  let fixture: ComponentFixture<DATA2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DATA2Component]
    });
    fixture = TestBed.createComponent(DATA2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
