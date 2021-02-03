import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageAuthorizedComponent } from './main-page-authorized.component';

describe('MainPageAuthorizedComponent', () => {
  let component: MainPageAuthorizedComponent;
  let fixture: ComponentFixture<MainPageAuthorizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageAuthorizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageAuthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
