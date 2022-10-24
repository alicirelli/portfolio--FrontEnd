import { Component, Input, OnInit } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';
import { Education } from '../../model/education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @Input()
  education!: Education;

  constructor(private educationService: EducationService) { }

  ngOnInit(): void {
  }

}
