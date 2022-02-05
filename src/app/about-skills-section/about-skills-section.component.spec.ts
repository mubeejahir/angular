import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSkillsSectionComponent } from './about-skills-section.component';

describe('AboutSkillsSectionComponent', () => {
  let component: AboutSkillsSectionComponent;
  let fixture: ComponentFixture<AboutSkillsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSkillsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSkillsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
