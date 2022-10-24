import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Projects } from '../../model/projects.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input()
  project!: Projects;

  constructor(private projectService:ProjectService) {
    console.log('Project')
   }

  ngOnInit(): void {
    console.log('Project');
  }

}
