import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Singleskill } from '../model/singleskill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  
  URL = 'http://localhost:8080/traer/skill';

  constructor(private http : HttpClient) { }

  public getSkill() : Observable<Array<Singleskill>>{
    return this.http.get<Array<Singleskill>>(this.URL);

  }/* 
  public createSkill(skill: Singleskill) : Observable <any>{
    return this.http.post<any>(this.URL+'crear', skill);

  }

  public editSkill(id: number, skill:Singleskill): Observable<any> {
    return this.http.put<any>(this.URL + 'editar/${id}', skill);
  }

  public deleteSkill(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + 'borrar/${id}');
  } */
}
