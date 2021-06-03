import { Component } from '@angular/core';
import { AuthenticationService } from 'src/services/authentication.service';
import { isValidEmail, isValidPassword } from 'src/utils/validationForm';

@Component({
  selector: 'm-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent {
  user: string;
  password: string;
  id: string;
  name: string;
  address: string;

  emailError: string;
  passwordError: string;
  idError: string;
  nameError: string;
  addressError: string;

  constructor(public _authenticationService: AuthenticationService) {
    this.user = '';
    this.password = '';
    this.id = ""
    this.name = ""
    this.address = "";
    this.emailError = '';
    this.passwordError = '';
    this.idError = "";
    this.nameError = "";
    this.addressError = "";
  }

  setNameValue(name: string) {
    this.name = name;
  }

  setIdValue(id: string) {
    this.id = id;
  }

  setAddressValue(address: string) {
    this.address = address;
  }

  setUserValue(user: string) {
    this.user = user;
  }

  setPasswordValue(password: string) {
    this.password = password;
  }

  clearErrorData () {
    this.emailError = '';
    this.passwordError = '';
    this.idError = "";
    this.nameError = "";
    this.addressError = "";
  }

  async registerUser() {
    try {
      const response = await this._authenticationService.validateUser(this.id);

      if (response.status === 200) {
        this.idError = "Este usuario ya está en otra operadora"

      } else if (response.status === 204) {
        try {
          const data = {
            "id": this.id,
            "name": this.name,
            "address": this.address,
            "email": this.user,
            "operatorId": 30,
            "operatorName": "Carpex"
          }
          const responseApi = await this._authenticationService.singup({
            "cc": this.id,
            "name": this.name,
            "address": this.address,
            "email": this.user,
            "password": this.password
          });
          const responseCentral = await this._authenticationService.registerUserInCentral(data)

          console.log(responseCentral, responseApi)

          // this._authenticationService.redirectLogin();
        } catch (error) {
          if (error.code === 'auth/email-already-in-use') {
            this.passwordError = 'Este email ya está en uso';
          }
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  handleSignIn() {
    const isAValidEmail = isValidEmail(this.user);
    const isAValidPassword = isValidPassword(this.password);

    this.clearErrorData()

    if (isAValidEmail && isAValidPassword && this.name && this.id && this.address) {
      this.registerUser()

    } else {
      if (!isAValidPassword) {
        this.passwordError = 'Ingrese una contraseña válida';
      }
      if (!isAValidEmail) {
        this.emailError = 'Ingrese un email válido';
      }
      if (!this.name) {
        this.nameError = 'Ingrese nombres y apellidos';
      }
      if (!this.id) {
        this.idError = 'Ingrese su cédula';
      }
      if (!this.address) {
        this.addressError = 'Ingrese dirección de residencia';
      }
    }
  }
}
