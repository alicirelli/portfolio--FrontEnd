import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class PortSaveService implements CanActivate{

  realRol!: string;

  constructor( private tokenService:TokenService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const expectedRol = route.data['expectedRol'];
    const roles = this.tokenService.getAuthorities();
    this.realRol = 'user';
    roles.forEach(rol=> {
      if (rol === 'ROLE_ADMIN') {
        this.realRol = 'admin';
      }
    });
    if (this.tokenService.getToken() || expectedRol.indexOf(this.realRol)=== -1) {
      return false;       
    }
    return true; 
  }
}
