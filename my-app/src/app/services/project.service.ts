import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../model/projects.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  URL = 'http://localhost:8080/traer/project';

  constructor(private http : HttpClient) { }

  public getProject() : Observable<Array<Projects>>{
    return this.http.get<Array<Projects>>(this.URL);

  }
  /* public createProject(project: Projects) : Observable <any>{
    return this.http.post<any>(this.URL+'crear', project);

  }

  public editProject(id: number, project:Projects): Observable<any> {
    return this.http.put<any>(this.URL + 'editar/${id}', project);
  }

  public deleteProject(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + 'borrar/${id}');
  } */
}

