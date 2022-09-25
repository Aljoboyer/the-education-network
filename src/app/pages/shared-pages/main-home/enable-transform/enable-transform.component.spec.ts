import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnableTransformComponent } from './enable-transform.component';

describe('EnableTransformComponent', () => {
  let component: EnableTransformComponent;
  let fixture: ComponentFixture<EnableTransformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnableTransformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnableTransformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
