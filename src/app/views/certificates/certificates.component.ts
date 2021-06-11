import { Component, OnInit } from '@angular/core';
import { Certificate } from 'src/app/shared/templates';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  courses!: Certificate[];
  specializations!: Certificate[];
  certifications!: Certificate[];
  imageloc = "assets/images/"
  constructor() { 
    this.courses = [
      {
        course: "The Modern Angular Bootcamp",
        providers: [
          {
          name: "Udemy",
          image: this.imageloc+"udemy-logo.png"
          },
          {
            name: "Stephen Grider",
            image: this.imageloc+"stephen.jpg"
          }
        ],
        doi: "August 2020",
        cred_id: "UC-471a35f6-fe1a-4542-8f07-8899a1a873e7",
        verify_link: "",
        view_link: "",
        status: 3
      },
      {
        course: "Extensive Python and PyTorch for AI",
        providers: [
          {
          name: "The School of AI",
          image: this.imageloc+"tsai-logo.png"
          }
        ],
        doi: "Not Issued Yet",
        cred_id: "",
        verify_link: "",
        view_link: "",
        status: 2
      }
    ];
    this.specializations = [
      {
        course: "Python for Everybody",
        providers: [
          {
          name: "Coursera",
          image: this.imageloc+"coursera-logo.png"
          },
          {
            name: "University of Michigan",
            image: this.imageloc+"uom-logo.png"
          }
        ],
        doi: "May 2020",
        cred_id: "UCHRKULLR7E6",
        verify_link: "",
        view_link: "",
        status: 3
      },
      {
        course: "Applied Data Science with Python",
        providers: [
          {
          name: "Coursera",
          image: this.imageloc+"coursera-logo.png"
          },
          {
            name: "University of Michigan",
            image: this.imageloc+"uom-logo.png"
          }
        ],
        doi: "September 2020",
        cred_id: "FNBC9P32UEFL",
        verify_link: "",
        view_link: "",
        status: 3
      }
    ];
    this.certifications = [
      {
        course: "Problem Solving (Intermediate)",
        providers: [
          {
          name: "HackerRank",
          image: this.imageloc+"hackerrank-logo.png"
          }
        ],
        doi: "June 2021",
        cred_id: "CB741D67BBB0",
        verify_link: "https://www.hackerrank.com/certificates/cb741d67bbb0",
        view_link: "",
        status: 3
      },
      {
        course: "Rest API (Intermediate)",
        providers: [
          {
          name: "HackerRank",
          image: this.imageloc+"hackerrank-logo.png"
          }
        ],
        doi: "October 2020",
        cred_id: "CA99F6226499",
        verify_link: "https://www.hackerrank.com/certificates/ca99f6226499",
        view_link: "",
        status: 3
      },
      {
        course: "Python (Basic)",
        providers: [
          {
          name: "HackerRank",
          image: this.imageloc+"hackerrank-logo.png"
          }
        ],
        doi: "September 2020",
        cred_id: "AC40FCEE0E6C",
        verify_link: "https://www.hackerrank.com/certificates/ac40fcee0e6c",
        view_link: "",
        status: 3
      }
    ]
  }

  ngOnInit(): void {
  }

}
