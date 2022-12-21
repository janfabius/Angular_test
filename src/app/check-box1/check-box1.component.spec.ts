import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBox1Component } from './check-box1.component';

describe('CheckBox1Component', () => {
  let component: CheckBox1Component;
  let fixture: ComponentFixture<CheckBox1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBox1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckBox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
