import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOverComponent } from './menu-over.component';

describe('MenuOverComponent', () => {
  let component: MenuOverComponent;
  let fixture: ComponentFixture<MenuOverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuOverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
