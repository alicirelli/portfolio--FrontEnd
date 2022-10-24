import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';
import { Education } from '../../model/education.model';

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.css']
})
export class AcademyComponent implements OnInit {

  educations: Education[] = []
  certification: Education[] = []


  constructor(private educationService:EducationService) {

   }

  ngOnInit(): void {
    this.cargarEducation();
  }

  cargarEducation(): void{
    this.educationService.getEducation().subscribe(data => {
      // separar 
      // cert[] = todos los elementos de data donde is_certification ==TRue
      // edu[] = todos los elementos de data donde is_certification ==false
     
      let is_not_certification: boolean = false ;
      
      // por cada educ de la data guardada en ls DB
      for (let educ of data) {  
        
        console.log("educ", educ)
             
        // si cada educ es false 
        if (educ.certificacion == is_not_certification) {
          // carga las educaciones que son cert:false
            this.educations.push(educ)                
        } else {
          // sino las certificaciones 
          this.certification.push(educ)
        }
    }

    })
  }
}
