import { User } from '../models/User.model';
import { Login } from './../models/Login.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  public sendLogin(login: Login): void {
    sessionStorage.setItem('token', environment.token);
  }

  public registerUser(user: User[]): void {
    localStorage.setItem('movieAppUser', JSON.stringify(user));
  }
}
