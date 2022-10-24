import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience.service';
import { Singlehistory } from '../../model/singlehistory.model';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  experiencia: Singlehistory[] = [];

  constructor(private experienceService : ExperienceService) { }

  ngOnInit(): void {

    this.cargarExperiencia();
    // buscar historias desde la DB

    // guardar las historias en "histories"

    // actualizar el html del componente para que itere sobre todas las historias DONE
  }

  cargarExperiencia(): void{
    this.experienceService.getExperience().subscribe(data => {
      this.experiencia = data})
  }
}
