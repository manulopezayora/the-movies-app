import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../models/Login.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  public sendLoginForm(): void {
    if (this.loginForm.valid) {
      this.sendLogin(this.loginForm.value);
    }
  }

  private sendLogin(user: Login): void {
    this.userService.sendLogin(user);
  }

  private createLoginForm(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

}
