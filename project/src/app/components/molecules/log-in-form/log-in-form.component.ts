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
  charging: boolean;

  constructor(public _authService: AuthenticationService) {
    this.user = '';
    this._password = '';
    this.emailError = '';
    this.passwordError = '';
    this.charging = false;
  }

  getUserValue(user: string) {
    this.user = user;
  }

  getPasswordValue(password: string) {
    this._password = password;
  }

  async handleLogin() {
    this.charging = true;

    const isAValidEmail = isValidEmail(this.user);

    this.emailError = '';
    this.passwordError = '';

    if (isAValidEmail && this._password) {
      try {
        const responseApi =  await this._authService.login({email: this.user, password: this._password});
        localStorage.setItem("user_data", JSON.stringify(responseApi))
        window.location.href = HOME
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

    this.charging = false
  }
}
