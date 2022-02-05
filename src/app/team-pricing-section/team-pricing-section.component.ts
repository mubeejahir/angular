import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-team-pricing-section',
  templateUrl: './team-pricing-section.component.html',
  styleUrls: ['./team-pricing-section.component.css']
})
export class TeamPricingSectionComponent implements OnInit {
  teams: {
    title: string,
    position: string
  }[]=[];

  constructor(private dataProviderService: DataProviderService) { }

  ngOnInit(): void {
    this.teams = this.dataProviderService.getTeams();
  }

}
