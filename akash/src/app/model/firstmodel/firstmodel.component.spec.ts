import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstmodelComponent } from './firstmodel.component';

describe('FirstmodelComponent', () => {
  let component: FirstmodelComponent;
  let fixture: ComponentFixture<FirstmodelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstmodelComponent]
    });
    fixture = TestBed.createComponent(FirstmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
