import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormMainComponent } from './input-form-main.component';

describe('InputFormMainComponent', () => {
  let component: InputFormMainComponent;
  let fixture: ComponentFixture<InputFormMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFormMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFormMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
