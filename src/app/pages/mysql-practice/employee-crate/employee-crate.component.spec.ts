import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCrateComponent } from './employee-crate.component';

describe('EmployeeCrateComponent', () => {
  let component: EmployeeCrateComponent;
  let fixture: ComponentFixture<EmployeeCrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCrateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
