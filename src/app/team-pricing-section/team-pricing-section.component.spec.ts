import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPricingSectionComponent } from './team-pricing-section.component';

describe('TeamPricingSectionComponent', () => {
  let component: TeamPricingSectionComponent;
  let fixture: ComponentFixture<TeamPricingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamPricingSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPricingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
