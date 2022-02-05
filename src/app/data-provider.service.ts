import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataProviderService {
  private footerData: {
    moduleTitle: string;
    p: string;
    h3: string;
  } = {
    moduleTitle: 'Join Our Newsletter',
    p: 'Tamen quem nulla quae legam multos aute sint culpa legam noster magna',
    h3: 'BizLand',
  };

  private heroData: {
    title1: string;
    span: string;
    title2: string;
    link: string;
  } = {
    title1: 'Welcome to',
    span: 'BizLand',
    title2: 'We are team of talented designers making websites with Bootstrap',
    link: 'Get Started',
  };

  private features: {
    title: string;
    description: string;
  }[] = [
    {
      title: 'Lorem Ipsum',
      description:
        'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
    },
    {
      title: 'Sed ut perspiciatis',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    },
    {
      title: 'Magni Dolores',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
    },
    {
      title: 'Nemo Enim',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
    },
  ];
  private counts : {
    name: string
  }[] = [
    {
      name: "Happy Clients"
     },
     {
       name: "Projects"
     },
     {
       name: "Hours Of Support "
     },
     {
       name: "Hard Workers "
     }
  ];
  
  private services: {
    name: string,
    description: string
  }[]= [
    {
      name: "Lorem Ipsum",
      description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
    },
    {
      name: "Sed ut perspiciatis",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    },
    {
      name: "Magni Dolores",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"
    },
    {
      name: "Nemo Enim",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"
    },
    {
      name: "Dele cardo",
      description: "Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur"
    },
    {
      name: "Divera don",
      description: "Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur"
    }
  ];

  private testimonials: {
    image: string,
    name: string,
    position: string,
    description: string
  }[]= [
    {
      image: "assets/img/testimonials/testimonials-1.jpg",
      name: "Saul Goodman",
      position: "Ceo &amp; Founder",
      description: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."
    },
    {
      image: "assets/img/testimonials/testimonials-2.jpg",
      name: "Sara Wilsson",
      position: "Designer",
      description: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
    },
    {
      image: "assets/img/testimonials/testimonials-3.jpg",
      name: "Jena Karlis",
      position: "Store Owner",
      description: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim."
    },
    {
      image: "assets/img/testimonials/testimonials-4.jpg",
      name: "Matt Brandon",
      position: "Freelancer",
      description: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam."
    },
    {
      image: "assets/img/testimonials/testimonials-5.jpg",
      name: "John Larson",
      position: "Entrepreneur",
      description: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid."
    }
  ];

  private faqs: {
    question: string,
    link: string
  }[]= [
    {
      question: "Non consectetur a erat nam at lectus urna duis?",
      link: "#faq1"
    },
    {
      question: "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
      link: "#faq2"
    },
    {
      question: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?",
      link: "#faq3"
    },
    {
      question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
      link: "#faq4"
    },
    {
      question: "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
      link: "#faq5"
    },
    {
      question: "Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?",
      link: "#faq6"
    }
  ];

  private lists: {
    name: string,
    description: string
  }[]= [
    {
      name: "Ullamco laboris nisi ut aliquip consequat",
      description: "Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade"
    },
    {
      name: "Magnam soluta odio exercitationem reprehenderi",
      description: "Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi"
    }
  ];

  private data: {
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

  private teams: {
    title: string,
    position: string
  }[]= [
    {
      title: "Walter White",
      position: "Chief Executive Officer"
    },
    {
      title: "Sarah Jhonson",
      position: "Product Manager"
    },
    {
      title: "William Anderson",
      position: "CTO"
    },
    {
      title: "Amanda Jepson",
      position: "Accountant"
    }
  ];

  constructor(private http: HttpClient) {}

  getFooterData() {
    return this.footerData;
  }

  getHeroData() {
    return this.heroData;
  }

  getFeatures() {
    return this.features;
  }

  getCounts(){
    return this.counts;
  }

  getServices(){
    return this.services;
  }

  getTestimonials(){
    return this.testimonials;
  }

  getFaqs(){
    return this.faqs;
  }

  getLists(){
    return this.lists;
  }

  getData(){
    return this.data;
  }

  getTeams(){
    return this.teams;
  }

  addEmail(emailId){
    let emailObject = {
      'mail': emailId
    }
    this.http.post('https://angular-practice-7fa8e-default-rtdb.asia-southeast1.firebasedatabase.app/subscription.json', emailObject).subscribe(response => {
      console.log(response);
    } );
  }
  
  getEmails(){
    return this.http.get('https://angular-practice-7fa8e-default-rtdb.asia-southeast1.firebasedatabase.app/subscription.json')
  }


  addFormData(allData:{}){
    this.http.post('https://angular-practice-7fa8e-default-rtdb.asia-southeast1.firebasedatabase.app/fromDatas.json', allData).subscribe(response =>{
    console.log(response);
    });
  }

  getFormDatas(){
    return this.http.get('https://angular-practice-7fa8e-default-rtdb.asia-southeast1.firebasedatabase.app/fromDatas.json')
  }
}
