import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFixedComponent } from './edit-fixed.component';

describe('EditFixedComponent', () => {
  let component: EditFixedComponent;
  let fixture: ComponentFixture<EditFixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFixedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
