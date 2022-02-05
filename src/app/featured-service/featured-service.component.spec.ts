import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedServiceComponent } from './featured-service.component';

describe('FeaturedServiceComponent', () => {
  let component: FeaturedServiceComponent;
  let fixture: ComponentFixture<FeaturedServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
