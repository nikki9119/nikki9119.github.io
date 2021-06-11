import { Component, Input, OnInit } from '@angular/core';
import { ProfileData } from '../templates';

@Component({
  selector: 'app-profile-fab',
  templateUrl: './profile-fab.component.html',
  styleUrls: ['./profile-fab.component.scss']
})
export class ProfileFabComponent implements OnInit {
  @Input() profileData!: ProfileData;
  constructor() { }

  ngOnInit(): void {
  }

}
