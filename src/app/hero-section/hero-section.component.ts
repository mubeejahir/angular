import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit { 
  heroData: {
    title1: string;
    span: string;
    title2: string;
    link: string;
  } = {
    title1: 'Welcome to',
    span: 'BizLand',
    title2: 'We are team of talented designers making websites with Bootstrap',
    link: 'Get Started',
  };
  
  constructor(private dataProviderService: DataProviderService) { }

  ngOnInit(): void {
    this.heroData =  this.dataProviderService.getHeroData();
  }

}
