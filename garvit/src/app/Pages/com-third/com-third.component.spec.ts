import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComThirdComponent } from './com-third.component';

describe('ComThirdComponent', () => {
  let component: ComThirdComponent;
  let fixture: ComponentFixture<ComThirdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComThirdComponent]
    });
    fixture = TestBed.createComponent(ComThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
