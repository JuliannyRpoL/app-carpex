import axios from 'axios';
import { environment } from 'src/environments/environment';

const axiosInterceptor = axios.create({
  baseURL: environment.BACKEND_URL,
});

export default axiosInterceptor;
