import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesOfAccordionComponent } from './properties-of-accordion.component';

describe('PropertiesOfAccordionComponent', () => {
  let component: PropertiesOfAccordionComponent;
  let fixture: ComponentFixture<PropertiesOfAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesOfAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesOfAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
