import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: '/',
  withCredentials:true
});

const requestHandler = (config: AxiosRequestConfig) => {
  // Modify config here
  // if (auth.getToken()) {
  //   // config.headers['Authorization'] = `Bearer ${auth.getToken()}`;
  // }

  config.timeout = 30000;
  return config;
};

instance.interceptors.request.use(requestHandler);
instance.interceptors.response.use(undefined, (error: AxiosError) => {
  // handle error
  console.log(error.response);
  return Promise.reject(error.response?.data?.error)
});

export default instance;
