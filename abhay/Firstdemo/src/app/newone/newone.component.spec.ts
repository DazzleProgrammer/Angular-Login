import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewoneComponent } from './newone.component';

describe('NewoneComponent', () => {
  let component: NewoneComponent;
  let fixture: ComponentFixture<NewoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewoneComponent]
    });
    fixture = TestBed.createComponent(NewoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
