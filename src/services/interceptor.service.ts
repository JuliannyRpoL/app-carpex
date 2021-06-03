import axios from 'axios';
import { AuthenticationService } from 'src/services/authentication.service';

const axiosInterceptor = axios.create({
  baseURL: 'https://1sej58tw6k.execute-api.us-east-1.amazonaws.com/apis',
});

export default axiosInterceptor;
