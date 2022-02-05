import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {
  emails = [];
  constructor(private dataProviderService: DataProviderService) { }

  ngOnInit(): void {
    this.getDataFromService();
  }
  formSubmit(name: string, email: string, subject: string, message: string){
    //this.dataProviderService.addFormData(name,email,subject,message);
  }
  getDataFromService(){
    this.dataProviderService.getFormDatas().subscribe(formData=>{
      console.log(formData);
      for(let prop in formData){
        console.log('from ts'+ formData[prop]['email']);
        this.emails.push()
      }
    })
  }

}
