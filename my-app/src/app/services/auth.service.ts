import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jwtdto } from '../model/jwtdto.model';
import { LoginUsuario } from '../model/login-usuario.model';
import { NuevoUsuario } from '../model/nuevo-usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8080/auth/';

  constructor(private httpCliente: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
      return this.httpCliente.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<Jwtdto> {
    return this.httpCliente.post<Jwtdto>(this.authURL + 'login', loginUsuario);
}
}
