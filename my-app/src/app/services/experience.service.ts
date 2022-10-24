import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Singlehistory } from '../model/singlehistory.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  URL = 'http://localhost:8080/traer/experience';

  constructor(private http : HttpClient) { }

  public getExperience() : Observable<Singlehistory[]>{
    return this.http.get<Singlehistory[]>(this.URL);

  }
/*   public createExperience(experience: Singlehistory) : Observable <any>{
    return this.http.post<any>(this.URL+'crear', experience);

  }

  public editExperience(id: number, experience:Singlehistory): Observable<any> {
    return this.http.put<any>(this.URL + 'editar/${id}', experience);
  }

  public deleteExperience(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + 'borrar/${id}');
  } */
}
 