import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginroutingComponent } from './loginrouting.component';

describe('LoginroutingComponent', () => {
  let component: LoginroutingComponent;
  let fixture: ComponentFixture<LoginroutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginroutingComponent]
    });
    fixture = TestBed.createComponent(LoginroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
