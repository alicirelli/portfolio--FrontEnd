import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../model/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  URL = 'http://localhost:8080/traer/about';

  constructor (private http : HttpClient) { }

  public getAbout() : Observable <Array<About>>{
    return this.http.get<Array<About>>(this.URL);

  }
  /* public createAbout(about: About) : Observable <About>{
    return this.http.post<About>(this.URL+'crear', about);

  } */
  /* public editPersona(about: About) : Observable<About>{
    let id_entidad = about.id;
    const options = {
      params: new HttpParams()
    }  */

                      // Para cada campo de Persona
                        // options[params].set(param, value)

    /* for (let param of Object.keys(about)) {
        if (param != "id")
          options.params.set(param,about[param as keyof About]);
      }

    return this.http.put<About>(this.URL+'editar/'+id_entidad, "", options);
  } */


}
