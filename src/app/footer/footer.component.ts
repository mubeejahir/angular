import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerData: {
    moduleTitle: string;
    p: string;
    h3: string;
  } = {
    moduleTitle: 'Join Our Newsletter',
    p: 'Tamen quem nulla quae legam multos aute sint culpa legam noster magna',
    h3: 'BizLand',
  };

  subscribers: {} = {}
  
  
  constructor (private dataProviderService: DataProviderService) {}
  
  ngOnInit(): void {
    this.footerData = this.dataProviderService.getFooterData();
    this.getEmails();
  }

  addSubscribe(emailId){
    this.dataProviderService.addEmail(emailId);
  }

  getEmails(){
    this.dataProviderService.getEmails().subscribe(emails => {     
      this.subscribers = emails;
      emails = Object.values( this.subscribers)
      console.log(emails);
      
      
    });
  }
}

