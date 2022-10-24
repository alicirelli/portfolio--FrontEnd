import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/about.model';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  about: About = new About(0,"","")
  
  
  constructor(public aboutService: AboutService) { }

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe(data => {
      if (data.length > 0)
        this.about = data[0]
      else
        console.log("No existe about!")
      })
  }

}
