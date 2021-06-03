import { Component } from '@angular/core';
import { HOME } from 'src/app/router/routes';
import { AuthenticationService } from 'src/services/authentication.service';
import { isValidEmail } from 'src/utils/validationForm';

@Component({
  selector: 'm-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss'],
})
export class LogInFormComponent {
  user: string;
  _password: string;
  emailError: string;
  passwordError: string;

  constructor(public _authService: AuthenticationService) {
    this.user = '';
    this._password = '';
    this.emailError = '';
    this.passwordError = '';
  }

  getUserValue(user: string) {
    this.user = user;
  }

  getPasswordValue(password: string) {
    this._password = password;
  }

  async handleLogin() {
    const isAValidEmail = isValidEmail(this.user);

    this.emailError = '';
    this.passwordError = '';

    if (isAValidEmail && this._password) {
      try {
        const responseApi =  await this._authService.login({email: this.user, password: this._password});
        let userData = {
          "cc": "1000406959",
          "name": "Julianny Restrepo",
          "address": "Medellín",
          "email": "juli@gmail.com"
        }
        localStorage.setItem("user_data", JSON.stringify(userData))
        window.location.href = HOME

        //this._authService.redirectLogin();
      } catch (error) {
        if (
          error.code === 'auth/wrong-password' ||
          error.code === 'auth/user-not-found'
        ) {
          this.passwordError = 'Credenciales incorrectas';
        } else {
          console.log(error);
        }
      }
    } else {
      if (!this._password) {
        this.passwordError = 'Ingrese una contraseña';
      }
      if (!isAValidEmail) {
        this.emailError = 'Ingrese un email válido';
      }
    }
  }
}
