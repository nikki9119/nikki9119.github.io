import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../templates';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {

  @Input() company !: Company;
  constructor() { }

  ngOnInit(): void {
  }

}
