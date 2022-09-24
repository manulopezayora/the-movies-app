import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from '../../models/Register.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm!: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  public sendRegisterForm(): void {
    if (this.registerForm.valid) {
      this.sendRegister(this.registerForm.value);
    }
  }

  private sendRegister(user: Register): void {
    this.userService.sendLogin(user);
  }

  private createRegisterForm(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      password2: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

}
