import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/model/language.model';
import { LanguageService } from 'src/app/services/language.service';
import { SkillService } from 'src/app/services/skill.service';
import { Singleskill } from '../../model/singleskill.model';

@Component({
  selector: 'app-capacity',
  templateUrl: './capacity.component.html',
  styleUrls: ['./capacity.component.css']
})
export class CapacityComponent implements OnInit {

  skill: Singleskill[] = []
  language: Language = new Language(0, "")

  constructor(private skillService:SkillService, private languageService:LanguageService) {  }
  

  ngOnInit(): void {

    this.cargarSkill();
    this.cargarIdioma();
  }

  cargarSkill(): void{
    this.skillService.getSkill().subscribe(data => {
      this.skill = data})
  }

  cargarIdioma(): void{
    this.languageService.getLanguage().subscribe(data => {
      this.language = data[0]})
  }
}
