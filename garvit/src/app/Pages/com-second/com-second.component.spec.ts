import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComSecondComponent } from './com-second.component';

describe('ComSecondComponent', () => {
  let component: ComSecondComponent;
  let fixture: ComponentFixture<ComSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComSecondComponent]
    });
    fixture = TestBed.createComponent(ComSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
