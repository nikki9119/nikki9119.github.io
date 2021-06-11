import { Component, Input, OnInit } from '@angular/core';
import { Institution } from '../templates';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.scss']
})
export class EducationCardComponent implements OnInit {
  @Input() institution!: Institution;
  constructor() { }

  ngOnInit(): void {
  }

}
