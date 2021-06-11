import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../templates';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {

  @Input() skill!: Skill;
  whole!: number;
  part!: number;
  arr!: number[];

  constructor() { }

  ngOnInit(): void {
    // this.skill.score *= 10;
    this.whole = Math.floor(this.skill.score);
    this.part = Math.ceil(this.skill.score - this.whole);
    console.log(this.whole,this.part);
    this.arr = Array(this.whole).fill(1);
  }

}
