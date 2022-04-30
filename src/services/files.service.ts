import { Injectable } from '@angular/core';
import axios from "axios";

import axiosInterceptor from './interceptor.service';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  async getAllFiles() {
    const url = `/getFiles`;

    return (await axiosInterceptor.get(url)).data;
  }
}
