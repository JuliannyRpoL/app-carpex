import axios from 'axios';
import { AuthenticationService } from 'src/services/authentication.service';

const axiosInterceptor = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
});

export default axiosInterceptor;
