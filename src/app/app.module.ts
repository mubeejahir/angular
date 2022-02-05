import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FeaturedServiceComponent } from './featured-service/featured-service.component';
import { AboutSkillsSectionComponent } from './about-skills-section/about-skills-section.component';
import { CountsSectionComponent } from './counts-section/counts-section.component';
import { ClientServerSectionComponent } from './client-server-section/client-server-section.component';
import { TestimonialsSectionComponent } from './testimonials-section/testimonials-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { TeamPricingSectionComponent } from './team-pricing-section/team-pricing-section.component';
import { FaqSectionComponent } from './faq-section/faq-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    FeaturedServiceComponent,
    AboutSkillsSectionComponent,
    CountsSectionComponent,
    ClientServerSectionComponent,
    TestimonialsSectionComponent,
    PortfolioSectionComponent,
    TeamPricingSectionComponent,
    FaqSectionComponent,
    ContactSectionComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
