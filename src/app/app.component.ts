import { Component } from '@angular/core';
import { DataProviderService } from './data-provider.service';
import { StudentDataService } from './student-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataProviderService]
  

})
export class AppComponent {
  title = 'angular-project';
  footerData: {
    moduleTitle: string;
    p: string;
    h3: string;
  }  = {
    moduleTitle: "Join Our Newsletter",
    p: "Tamen quem nulla quae legam multos aute sint culpa legam noster magna",
    h3: "BizLand"
  }

  heroData = {
    title1: "Welcome to",
    span:  "BizLand",
    title2:  "We are team of talented designers making websites with Bootstrap",
    link:  "Get Started"
  }

 
}
