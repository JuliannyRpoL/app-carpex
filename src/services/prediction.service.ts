import { Injectable } from '@angular/core';
import axios from "axios";

import axiosInterceptor from './interceptor.service';

@Injectable({
  providedIn: 'root',
})
export class PredictionService {
  prediction = "";

  async getWeatherPrediction(lat: string, lon: string) {
    const url = `/getPrediction?lat=${lat}&lon=${lon}`;

    this.prediction = (await axiosInterceptor({
      method: 'get',
      url,
    })).data;

    switch (true) {
      case this.prediction['temp'] < '10':
        this.prediction['img'] = "../../../../assets/img/copo.png"
        break;
      case this.prediction['temp'] < '20':
        this.prediction['img'] = "../../../../assets/img/viento.png"
        break;
      case this.prediction['temp'] < '30':
        this.prediction['img'] = "../../../../assets/img/playa.png"
        break;
      default:
        this.prediction['img'] = "../../../../assets/img/fuego.png"
        break;
    }
  }

  async getAllFiles() {
    const user_data = localStorage.getItem('user_data');

    let user_id: string;

    user_data != undefined
      ? (user_id = JSON.parse(user_data).cc)
      : (user_id = '');

    const url = `/files/list-files/${user_id}`;

    return (await axiosInterceptor.get(url)).data;
  }

  async getOpenRecently() {
    const user_data = localStorage.getItem('user_data');

    let user_id: string;

    user_data != undefined
      ? (user_id = JSON.parse(user_data).cc)
      : (user_id = '');

    const url = `/files/open-recently/${user_id}`;

    return (await axiosInterceptor.get(url)).data;
  }

  async getFilesAutenticated() {
    const user_data = localStorage.getItem('user_data');

    let user_id: string;

    user_data != undefined
      ? (user_id = JSON.parse(user_data).cc)
      : (user_id = '');

    const url = `/files/authenticated/${user_id}`;

    return (await axiosInterceptor.get(url)).data;
  }

  async autenticateFile(data) {
    const user_data = localStorage.getItem('user_data');

    let user_id: string;

    user_data != undefined
      ? (user_id = JSON.parse(user_data).cc)
      : (user_id = '');

    const url = `/files/authenticate-file/${user_id}`;

    return (await axiosInterceptor.put(url, data)).data;
  }

  async getAutentication(urlFile, name) {
    const user_data = localStorage.getItem('user_data');

    let user_id: string;

    user_data != undefined
      ? (user_id = JSON.parse(user_data).cc)
      : (user_id = '');

    const url = `https://govcarpetaapp.mybluemix.net/apis/authenticateDocument/${user_id}/${urlFile}/${name}`;

    return (await axios.get(url)).data;
  }

  async updateOpen(data) {
    const user_data = localStorage.getItem('user_data');

    let user_id: string;

    user_data != undefined
      ? (user_id = JSON.parse(user_data).cc)
      : (user_id = '');

    const url = `/files/update-date/${user_id}`;

    return (await axiosInterceptor.put(url, data)).data;
  }
}
