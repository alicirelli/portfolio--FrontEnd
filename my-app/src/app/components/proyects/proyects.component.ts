import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Projects } from '../../model/projects.model';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  works!: Projects[] 

  constructor(private projectService:ProjectService) {

   }

  ngOnInit(): void {
    
    this.cargarEducation();
  }


  cargarEducation(): void{
    this.projectService.getProject().subscribe(data => {
      this.works = data})
  }
}
