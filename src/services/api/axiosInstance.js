import axios from 'axios';
import { API_URL } from '@/config';

// Temel axios instance'ı oluşturma
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Her istekte token kontrolü
axiosInstance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Her yanıtta hata kontrolü
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // 401 hatası gelirse kullanıcıyı login sayfasına yönlendir
    if (error.response?.status === 401) {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      window.location.href = '/auth/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance; 