import { Component, OnInit } from '@angular/core';
import { ProfileData } from 'src/app/shared/templates';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  profileData: ProfileData[];

  constructor() { 
    this.profileData = [
      {
        image_loc: 'facebook-logo.svg',
        gradient: ['#2f55a4','#445c8f'],
        href: 'https://www.facebook.com/a.p.nikhilkumar/'
      },
      {
        image_loc: 'github-logo.svg',
        gradient: ['#000000','#1d1a1a'],
        href: 'https://github.com/nikki9119'
      },
      {
        image_loc: 'linkedin-logo.svg',
        gradient: ['#0e76a8','#1293d2'],
        href: 'https://www.linkedin.com/in/nikki9119/'
      },
      {
        image_loc: 'instagram-logo.svg',
        gradient: ['#e95950','#bc2a8d'],
        href: 'https://www.instagram.com/nikhil_kumar_99/'
      },
      {
        image_loc: 'twitter-logo.svg',
        gradient: ['#00acee','#00b9ff'],
        href: 'https://twitter.com/nikki9119'
      }
    ]
  }

  ngOnInit(): void {
  }

}
