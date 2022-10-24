import { Component, Input, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';
import { Singleskill } from '../../model/singleskill.model';

@Component({
  selector: 'app-singleskill',
  templateUrl: './singleskill.component.html',
  styleUrls: ['./singleskill.component.css']
})
export class SingleskillComponent implements OnInit {
  
  @Input()
  skill: Singleskill = new Singleskill(0,"",0);

  constructor(private skillService:SkillService) { 
    console.log('Singleskill')
  }

  ngOnInit(): void {
    console.log('Singleskill')
  }

  getPoints(): number[] {
    return [...Array(this.skill.nivel).keys()]
  }

  getNoPoints(): number[] {
    return [...Array(5 - this.skill.nivel).keys()]
  }

}
