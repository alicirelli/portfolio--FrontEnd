import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

 
  persona: Persona = new Persona(0, "", "", "", "", "")

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {
      this.persona = data[0]})
  }

}
