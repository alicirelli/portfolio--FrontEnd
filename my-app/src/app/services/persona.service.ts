import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'http://localhost:8080/traer/persona';

  constructor(private http : HttpClient) { }

  public getPersona() : Observable <Array<Persona>>{
    return this.http.get<Array<Persona>>(this.URL);

  }
  /* public createPersona(persona: Persona) : Observable <Persona>{
    return this.http.post<Persona>(this.URL+'crear', persona);

  } */
  
 /* public deletePersona(persona: Persona) : Observable<unknown>{
    let id_entidad = persona.id;
    const url = `${this.URL}/${id_entidad}`;
    return this.http.delete(this.URL+'borrar/'+id_entidad);
  }

  public editPersona(persona: Persona) : Observable<Persona>{
    let id_entidad = persona.id;
    const options = {
      params: new HttpParams()
    } */

                      // Para cada campo de Persona
                        // options[params].set(param, value)

    /*   for (let param of Object.keys(persona)) {
        if (param != "id")
          options.params.set(param,persona[param as keyof Persona]);
      }

    return this.http.put<Persona>(this.URL+'editar/'+id_entidad, "", options);
  }
   */

  obtenerDatos(){
    console.log("El servicio portfolio esta corriendo")
  }
}
