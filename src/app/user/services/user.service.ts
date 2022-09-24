import { Login } from './../models/Login.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public sendLogin(login: Login): void {
    localStorage.setItem('user', JSON.stringify(login));
    sessionStorage.setItem('token', environment.token);
  }
}
