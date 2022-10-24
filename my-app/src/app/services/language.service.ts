import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../model/language.model';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  URL = 'http://localhost:8080/traer/language';

  constructor(private http : HttpClient) { }

  public getLanguage() : Observable<Array<Language>>{
    return this.http.get<Array<Language>>(this.URL);

  }
  /* public createLanguage(language: Language) : Observable <any>{
    return this.http.post<any>(this.URL+'crear', language);

  }

  public editLanguage(id: number, language:Language): Observable<any> {
    return this.http.put<any>(this.URL + 'editar/${id}', language);
  }

  public deleteLanguage(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + 'borrar/${id}');
  } */
}
