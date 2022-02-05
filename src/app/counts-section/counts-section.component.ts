import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-counts-section',
  templateUrl: './counts-section.component.html',
  styleUrls: ['./counts-section.component.css']
})
export class CountsSectionComponent implements OnInit {
  counts: {
    name: string,
  }[]= [];

  constructor(private dataProviderService: DataProviderService) { }

  ngOnInit(): void {
    this.counts = this. dataProviderService.getCounts();
  }

}
