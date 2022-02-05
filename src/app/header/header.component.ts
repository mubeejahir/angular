import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mail: string="contact@example.com";
  phone: string="+1 5589 55488 55";
  
  links = [{
    name: 'Home',
    link: '#hero',
    isActive: true
  }, 
  {
    name: 'About',
    link: '#about',
    isActive: false
  }, 
  {
    name: 'Services',
    link: '#services',
    isActive: false
  }, 
  {
    name: 'Portfolio',
    link: '#portfolio',
    isActive: false
  }, 
  {
    name: 'Team',
    link: '#team',
    isActive: false
  }, 
  {
    name: 'Contact',
    link: '#contact',
    isActive: false
  },
  {
    name: 'Drop down',
    link: '#',
    isActive: false,
    submenu: [
      {
        name: 'Drop Down 1',
        link: '#',
        isActive: false
      },
      {
        name: 'Drop Down 2',
        link: '#',
        isActive: false
      }
    ] 
  }
];
 

  constructor() { }

  ngOnInit(): void {
  }

}
