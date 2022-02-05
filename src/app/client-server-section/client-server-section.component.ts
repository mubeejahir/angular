import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-client-server-section',
  templateUrl: './client-server-section.component.html',
  styleUrls: ['./client-server-section.component.css']
})
export class ClientServerSectionComponent implements OnInit {
  services: {
    name: string,
    description: string
  }[]= [];

  constructor(private dataProviderService: DataProviderService) { }

  ngOnInit(): void {
    this.services = this.dataProviderService.getServices();
  }

}
