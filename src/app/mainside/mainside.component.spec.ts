import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsideComponent } from './mainside.component';


describe('MainsideComponent', () => {
  let component: MainsideComponent;
  let fixture: ComponentFixture<MainsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
