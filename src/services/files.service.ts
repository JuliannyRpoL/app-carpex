import { Injectable } from '@angular/core';
import axios from "axios";

import axiosInterceptor from './interceptor.service';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  async uploadFile(file) {
    const url = `/sendDataset`;
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
}
