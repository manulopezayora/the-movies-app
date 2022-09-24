import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { InputModule } from '../shared/components/input/input.module';
import { LoginFormComponent } from './components/login-form/login-form.component';


@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    InputModule
  ]
})
export class UserModule { }
