import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-featured-service',
  templateUrl: './featured-service.component.html',
  styleUrls: ['./featured-service.component.css']
})
export class FeaturedServiceComponent implements OnInit {
  features: {
    title: string,
    description: string
  }[]= [];

  
  constructor(private dataProviderService: DataProviderService) { }

  ngOnInit(): void {
    this.features = this.dataProviderService.getFeatures();
  }

}
