import { Injectable } from '@angular/core';
import axiosInterceptor from "./interceptor.service"

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  async validateUser(id: string) {
    const url = `/central/validateCitizen/${id}`

    return (await axiosInterceptor({url, method: "GET"}));
  }

  async registerUserInCentral(data: any) {
    const url = `/central/registerCitizen`
    const headers = {
      'Content-Type': "application/json",
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers':'*',
      'cache-control': 'no-cache'
    }
    data = JSON.stringify(data)

    return (await axiosInterceptor({headers, url, method: "POST", data}));
  }

  async singup(data: any) {
    const url = `/auth/singup`

    return (await axiosInterceptor({url, method: "POST", data}));
  }

  async login(data: any) {
    const url = `/auth/login`

    return (await axiosInterceptor({url, method: "POST", data})).data;
  }
}
