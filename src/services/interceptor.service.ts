import axios from 'axios';

const axiosInterceptor = axios.create({
  baseURL: process.env.BACKEND_URL,
});

export default axiosInterceptor;
