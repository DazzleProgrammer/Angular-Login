import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdcComponent } from './thirdc.component';

describe('ThirdcComponent', () => {
  let component: ThirdcComponent;
  let fixture: ComponentFixture<ThirdcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdcComponent]
    });
    fixture = TestBed.createComponent(ThirdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
