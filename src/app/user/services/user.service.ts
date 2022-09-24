import { User } from '../models/User.model';
import { Login } from './../models/Login.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) {}

  public sendLogin(login: Login): void {
    sessionStorage.setItem('token', environment.token);
    this.router.navigate(['home']);
  }

  public registerUser(user: User[]): void {
    localStorage.setItem('movieAppUser', JSON.stringify(user));
  }
}
