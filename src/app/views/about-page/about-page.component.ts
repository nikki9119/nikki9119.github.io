import { Component, OnInit } from '@angular/core';
import { Company, Institution, Skill } from 'src/app/shared/templates';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  institutions: Institution[];
  companies: Company[];
  skills: Skill[];
  imageloc = "assets/images/"
  constructor() { 
    this.institutions = [
      {
        name: "College of Engineering Guindy",
        logo: this.imageloc+"ceg-logo.png",
        alt: 'ceg-logo',
        location: 'Chennai, India',
        education: 'Bachelor of Engineering - Computer Science',
        time: 'Expected July 2021',
        marks: 'CGPA - 8.29/10',
        status: 2
      },
      {
        name: "GKD Matriculation Higher Secondary School",
        logo: this.imageloc+"gkd-logo.png",
        alt: 'gkd-logo',
        location: 'Coimbatore, India',
        education: '12th Standard',
        time: '2016 - 2017',
        marks: 'Overall - 1167/1200 (97.25%)',
        status: 3
      },
      {
        name: "AVB Matriculation Higher Secondary School",
        logo: this.imageloc+"avb-logo.png",
        alt: "avb-logo",
        location: "Coimbatore, India",
        education: "10th Standard",
        time: "2014 - 2015",
        marks: "Overall - 493/500 (98.6%)",
        status: 3
      }
    ];
    this.companies = [
      // {
      //   name: "Barclays Global Services",
      //   location: "Pune, India",
      //   alt: "barclays-logo",
      //   logo: this.imageloc+"barclays-logo.png",
      //   designation: "Software Developer - BA3",
      //   time: "Starting July 2021",
      //   status: 4
      // },
      {
        name: "Cyces Innovation Labs LLP",
        location: "Chennai, India",
        alt: "cyces-logo",
        logo: this.imageloc+"cyces-logo.png",
        designation: "SDE Intern",
        time: "April - July 2020 (4 months)",
        status: 3,
        description: [
          "Developed the front end of a data lake ingestion module.",
          "Technologies used: Angular, Angular Material and Flex-Layout."
        ]
      },
      {
        name: "Logic Research Labs",
        location: "Kumbakonam, India",
        alt: "lrl-logo",
        logo: this.imageloc+"lrl-logo.png",
        designation: "Research Intern",
        time: "November - December 2019 (2 months)",
        status: 3,
        description: [
          "Developed a library management module for Chinese Development Assistance Council (CDAC) to manage all their libraries in Singapore.",
          "Technologies used: HTML, PHP, JavaScript, Ajax, SQL."
        ]
      }
    ];
    this.skills = [
      {
        skill: "Angular",
        logo: this.imageloc+"angular-logo.png",
        alt: "angular-logo",
        score: 4.5
      },
      {
        skill: "Python",
        logo: this.imageloc+"python-logo.png",
        alt: "python-logo",
        score: 4.5
      },
      {
        skill: "C++",
        logo: this.imageloc+"cpp-logo.png",
        alt: "cpp-logo",
        score: 4
      },
      {
        skill: "TypeScript",
        logo: this.imageloc+"ts-logo.png",
        alt: "ts-logo",
        score: 4
      },
      {
        skill: "SQL",
        logo: this.imageloc+"sql-logo.png",
        alt: "sql-logo",
        score: 4
      },
      {
        skill: "HTML",
        logo: this.imageloc+"html-logo.png",
        alt: "html-logo",
        score: 3.5
      },
      {
        skill: "Data Structures",
        logo: this.imageloc+"ds-logo.png",
        alt: "ds-logo",
        score: 3.5
      },
      {
        skill: "Flutter",
        logo: this.imageloc+"flutter-logo.png",
        alt: "flutter-logo",
        score: 1
      }
    ];
  }

  ngOnInit(): void {
  }

}
