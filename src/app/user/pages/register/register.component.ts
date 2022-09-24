import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../models/Login.model';
import { User } from '../../models/User.model';
import { UserService } from '../../services/user.service';
import { checkIfUserExist, checkPasswordsMatch } from '../../utils/user.utils';

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

  public submitRegisterForm(): void {
    const userList: User[] = this.getUserList();
    if (this.registerForm.valid && this.validateRegisterForm(this.registerForm.value, userList)) {
      userList.push(this.registerForm.value);
      this.sendRegister(userList);
      this.registerForm.reset();
    }
  }

  private getUserList(): User[] {
    const userList: any = localStorage.getItem('movieAppUser');
    const userListParse: any = JSON.parse(userList) || [];
    return userListParse;
  }

  private validateRegisterForm(user: User, userList: any): boolean {
    if (checkIfUserExist(user, userList)) {
      // TODO: Error
      console.error('The user is already registered');
      return false;
    }
    if (!checkPasswordsMatch(user.password, user.password2)) {
      // TODO: Error
      console.error('The two passwords do not match');
      return false
    }
    return true;
  }

  private sendRegister(user: User[]): void {
    this.userService.registerUser(user);
  }

  private createRegisterForm(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      password2: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      favMovies: new FormControl([])
    })
  }

}
