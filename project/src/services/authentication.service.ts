import { Injectable } from '@angular/core';
import { CLIENT_ID, REDIRECT_URI, CLIENT_SECRET } from '../config/credentials';
import axios from 'axios';
import firebase from '../config/firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  async validateUser(id: string) {
    const url = `https://govcarpetaapp.mybluemix.net/apis/validateCitizen/${id}`

    return (await axios({url, method: "GET"}));
  }

  async registerUserInCentral(data: any) {
    const url = `https://govcarpetaapp.mybluemix.net/apis/registerCitizen`
    const headers = {
      'Content-Type': "application/json",
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers':'*',
      'cache-control': 'no-cache'
    }
    data = JSON.stringify(data)

    return (await axios({headers, url, method: "POST", data}));
  }

  async singup(data: any) {
    const url = `http://carpex-impressive-panda-tz.mybluemix.net/api/singup`

    return (await axios({url, method: "POST", data}));
  }

  async login(data: any) {
    const url = `http://carpex-impressive-panda-tz.mybluemix.net/api/login`

    return (await axios({url, method: "POST", data})).data;
  }
}
