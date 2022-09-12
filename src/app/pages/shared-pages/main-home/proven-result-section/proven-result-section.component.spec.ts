import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvenResultSectionComponent } from './proven-result-section.component';

describe('ProvenResultSectionComponent', () => {
  let component: ProvenResultSectionComponent;
  let fixture: ComponentFixture<ProvenResultSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvenResultSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvenResultSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
