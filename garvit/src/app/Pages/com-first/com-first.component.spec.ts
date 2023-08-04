import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComFirstComponent } from './com-first.component';

describe('ComFirstComponent', () => {
  let component: ComFirstComponent;
  let fixture: ComponentFixture<ComFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComFirstComponent]
    });
    fixture = TestBed.createComponent(ComFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
