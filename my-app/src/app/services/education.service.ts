import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

 
  URL = 'http://localhost:8080/traer/education';

  constructor(private http : HttpClient) { }

  public getEducation() : Observable<Education[]>{
    return this.http.get<Education[]>(this.URL);

  }
 /*  public createEducation(education: Education) : Observable <any>{
    return this.http.post<any>(this.URL+'crear', education);

  }

  public editEducation(id: number, education:Education): Observable<any> {
    return this.http.put<any>(this.URL + 'editar/${id}', education);
  }

  public deleteEducation(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + 'borrar/${id}');
  } */
}
