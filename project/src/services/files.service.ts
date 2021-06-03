import { Injectable } from '@angular/core';
import axios from "axios";

import axiosInterceptor from './interceptor.service';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  async uploadFile(file) {
    const user_data = localStorage.getItem('user_data');

    let user_id: string;

    user_data != undefined
      ? (user_id = JSON.parse(user_data).cc)
      : (user_id = '');

    const url = `/upload/${user_id}`;
    let formData = new FormData()
    formData.append("file", file);

    return (await axiosInterceptor({
      method: 'post',
      url,
      headers: {
        "Content-Type": "multipart/form-data"
      },
      data : formData
    })).data;
  }

  async getAllFiles() {
    const user_data = localStorage.getItem('user_data');

    let user_id: string;

    user_data != undefined
      ? (user_id = JSON.parse(user_data).cc)
      : (user_id = '');

    const url = `/listFiles/${user_id}`;

    return (await axiosInterceptor.get(url)).data;
  }

  async getOpenRecently() {
    const user_data = localStorage.getItem('user_data');

    let user_id: string;

    user_data != undefined
      ? (user_id = JSON.parse(user_data).cc)
      : (user_id = '');

    const url = `/openRecently/${user_id}`;

    return (await axiosInterceptor.get(url)).data;
  }

  async getFilesAutenticated() {
    const user_data = localStorage.getItem('user_data');

    let user_id: string;

    user_data != undefined
      ? (user_id = JSON.parse(user_data).cc)
      : (user_id = '');

    const url = `/autenticated/${user_id}`;

    return (await axiosInterceptor.get(url)).data;
  }

  async autenticateFile(data) {
    const user_data = localStorage.getItem('user_data');

    let user_id: string;

    user_data != undefined
      ? (user_id = JSON.parse(user_data).cc)
      : (user_id = '');

    const url = `/autenticate-file/${user_id}`;

    return (await axiosInterceptor.put(url, data)).data;
  }

  async getAutentication(urlFile, name) {
    const user_data = localStorage.getItem('user_data');

    let user_id: string;

    user_data != undefined
      ? (user_id = JSON.parse(user_data).cc)
      : (user_id = '');

    const url = `https://govcarpetaapp.mybluemix.net​/apis​/authenticateDocument​/${user_id}​/${urlFile}​/${name}`;

    return (await axiosInterceptor.get(url)).data;
  }

  async updateOpen(data) {
    const user_data = localStorage.getItem('user_data');

    let user_id: string;

    user_data != undefined
      ? (user_id = JSON.parse(user_data).cc)
      : (user_id = '');

    const url = `/update-date/${user_id}`;

    return (await axiosInterceptor.put(url, data)).data;
  }
}
