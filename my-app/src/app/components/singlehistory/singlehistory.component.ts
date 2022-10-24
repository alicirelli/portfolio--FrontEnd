import { Component, OnInit, Input} from '@angular/core';
import { ExperienceService } from 'src/app/services/experience.service';
import { Singlehistory } from '../../model/singlehistory.model';

@Component({
  selector: 'app-singlehistory',
  templateUrl: './singlehistory.component.html',
  styleUrls: ['./singlehistory.component.css']
})
export class SinglehistoryComponent implements OnInit {

  @Input()
  experience!: Singlehistory;
  

  constructor(private experienceService : ExperienceService) { 
    console.log('Singlehistory');
  }

  ngOnInit(): void {
  }

}
