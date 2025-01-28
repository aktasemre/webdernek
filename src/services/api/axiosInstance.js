import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // http://localhost:8080/api
  headers: {
    'Content-Type': 'application/json',
  }
});

// Request'leri loglamak için
axiosInstance.interceptors.request.use(request => {
  console.log('API Request:', request);
  return request;
});

// Response'ları loglamak için
axiosInstance.interceptors.response.use(response => {
  console.log('API Response:', response);
  return response;
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