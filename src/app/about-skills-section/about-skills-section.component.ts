
import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-about-skills-section',
  templateUrl: './about-skills-section.component.html',
  styleUrls: ['./about-skills-section.component.css']
})
export class AboutSkillsSectionComponent implements OnInit {
  lists: {
    name: string,
    description: string
  }[] = [];

  data: {
    skillName: string,
    value: string, 
    skillName1: string, 
    value1: string, 
    skillName2: string, 
    value2: string, 
    skillName3: string, 
    value3: string, 
    skillName4: string, 
    value4: string, 
    skillName5: string, 
    value5: string
  } = {
    skillName: "HTML",
    value: "100%",
    skillName1: "CSS",
    value1: "90%",
    skillName2: "JAVASCRIPT",
    value2: "75%",
    skillName3: "PHP",
    value3: "80%",
    skillName4: "WordPress/CMS",
    value4: "90%",
    skillName5: "Photoshop",
    value5: "55%"
  };

  constructor(private dataProviderService: DataProviderService) { }

  ngOnInit(): void {
    this.lists = this.dataProviderService.getLists();
    this.data = this.dataProviderService.getData();
  }

}
