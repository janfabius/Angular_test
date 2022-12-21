import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBouncyComponent } from './button-bouncy.component';

describe('ButtonBouncyComponent', () => {
  let component: ButtonBouncyComponent;
  let fixture: ComponentFixture<ButtonBouncyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonBouncyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonBouncyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
