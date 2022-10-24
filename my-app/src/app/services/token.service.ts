import { Injectable } from '@angular/core';

const Token_Key = 'AuthToken';

const UserName_Key = 'AuthUserName';

const Authorities_Key = 'AuthAuthorities';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles: Array<string> = [];

  constructor() { }

  public setToken(token: string): void {
    window.sessionStorage.removeItem(Token_Key);
    window.sessionStorage.setItem(Token_Key, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(Token_Key)!;
  }

  public setUserName(userName: string): void {
    window.sessionStorage.removeItem(UserName_Key);
    window.sessionStorage.setItem(UserName_Key, userName);
  }

  public getUserName(): string {
    return sessionStorage.getItem(UserName_Key)!;
  }

  public setAuthorities(authorities: string[]): void {
    window.sessionStorage.removeItem(Authorities_Key);
    window.sessionStorage.setItem(Authorities_Key, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];
    let authoritiesKeys = sessionStorage.getItem(Authorities_Key)!
    if (authoritiesKeys) {
      JSON.parse(authoritiesKeys).forEach((authority: { authority: string; }) => {
        this.roles.push(authority.authority);

      });
    }
    return this.roles;
  }

  public logOut(): void {
    window.sessionStorage.clear();
  }
}
