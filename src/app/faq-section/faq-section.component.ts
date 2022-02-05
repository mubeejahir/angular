import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.css']
})
export class FaqSectionComponent implements OnInit {
  faqs: {
    question: string,
    link: string
  }[]= [];
  
  constructor(private dataProviderService: DataProviderService) { }

  ngOnInit(): void {
    this.faqs= this.dataProviderService.getFaqs();
  }

}
