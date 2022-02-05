import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.css']
})
export class TestimonialsSectionComponent implements OnInit {
  testimonials: {
    image: string,
    name: string,
    position: string,
    description: string
  }[]= [];
  

  constructor(private dataProviderService: DataProviderService) { }

  ngOnInit(): void {
    this.testimonials = this.dataProviderService.getTestimonials();
  }

}
