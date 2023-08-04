import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditComponent } from './new-edit.component';

describe('NewEditComponent', () => {
  let component: NewEditComponent;
  let fixture: ComponentFixture<NewEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewEditComponent]
    });
    fixture = TestBed.createComponent(NewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
