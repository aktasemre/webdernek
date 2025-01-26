# Web Dernek Frontend Dokümantasyonu

## API Endpoints ve Kullanımı

### 1. Kimlik Doğrulama (Auth) İşlemleri

#### Giriş Yapma
- **Endpoint:** `/api/auth/login`
- **Method:** POST
- **Request Body:**
```json
{
    "email": "string",
    "password": "string"
}
```
- **Response:**
```json
{
    "token": "string",
    "tokenType": "Bearer"
}
```

#### Kayıt Olma
- **Endpoint:** `/api/auth/register`
- **Method:** POST
- **Request Body:**
```json
{
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "password": "string",
    "phoneNumber": "string",
    "address": "string",
    "birthDate": "YYYY-MM-DD",
    "gender": "MALE/FEMALE/OTHER"
}
```

### 2. Kullanıcı İşlemleri

#### Mevcut Kullanıcı Bilgilerini Getirme
- **Endpoint:** `/api/users/me`
- **Method:** GET
- **Authorization:** Bearer Token
- **Response:**
```json
{
    "id": "number",
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "phoneNumber": "string",
    "address": "string",
    "birthDate": "YYYY-MM-DD",
    "gender": "string",
    "role": "string",
    "active": "boolean",
    "status": "string"
}
```

#### Şifre Değiştirme
- **Endpoint:** `/api/users/change-password`
- **Method:** POST
- **Authorization:** Bearer Token
- **Request Body:**
```json
{
    "currentPassword": "string",
    "newPassword": "string",
    "confirmPassword": "string"
}
```

### 3. Etkinlik İşlemleri

#### Etkinlik Listesi
- **Endpoint:** `/api/events`
- **Method:** GET
- **Response:**
```json
{
    "id": "number",
    "title": "string",
    "description": "string",
    "startDate": "YYYY-MM-DD HH:mm:ss",
    "endDate": "YYYY-MM-DD HH:mm:ss",
    "location": "string",
    "maxParticipants": "number",
    "currentParticipants": "number",
    "isActive": "boolean",
    "createdById": "number",
    "createdByName": "string"
}
```

### 4. Haberler

#### Haber Listesi
- **Endpoint:** `/api/news`
- **Method:** GET
- **Response:**
```json
{
    "id": "number",
    "title": "string",
    "content": "string",
    "publishDate": "YYYY-MM-DD HH:mm:ss",
    "isPublished": "boolean",
    "viewCount": "number",
    "imageUrl": "string",
    "summary": "string"
}
```

### 5. Bağış İşlemleri

#### Bağış Yapma
- **Endpoint:** `/api/donations`
- **Method:** POST
- **Authorization:** Bearer Token
- **Request Body:**
```json
{
    "amount": "number",
    "description": "string",
    "paymentMethod": "string"
}
```

### 6. İletişim

#### İletişim Formu Gönderme
- **Endpoint:** `/api/contact`
- **Method:** POST
- **Request Body:**
```json
{
    "name": "string",
    "email": "string",
    "subject": "string",
    "message": "string"
}
```

## Frontend Entegrasyon Notları

### 1. Kimlik Doğrulama
- Token'ı localStorage veya secure cookie'de saklayın
- Tüm API isteklerinde Authorization header'ına token'ı ekleyin
- Token formatı: `Bearer {token}`

### 2. Hata Yönetimi
Tüm API yanıtları şu formatta gelir:
```json
{
    "success": "boolean",
    "message": "string",
    "data": "object"
}
```

### 3. Sayfalama
Listeleme endpointleri için sayfalama parametreleri:
- `page`: Sayfa numarası (0'dan başlar)
- `size`: Sayfa başına öğe sayısı
- `sort`: Sıralama alanı ve yönü (örn: "createdAt,desc")

### 4. Güvenlik Notları
- Hassas bilgileri (token, kullanıcı bilgileri) güvenli şekilde saklayın
- HTTPS kullanın
- XSS ve CSRF koruması ekleyin
- Input validasyonu yapın

### 5. Next.js Entegrasyon Önerileri

```javascript
// API İstekleri için örnek servis
const apiService = {
  baseURL: 'http://localhost:8080/api',
  
  async request(endpoint, options = {}) {
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    };

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        ...options,
        headers,
      });
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Bir hata oluştu');
      }
      
      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  // Auth işlemleri
  auth: {
    login: (credentials) => apiService.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),
    register: (userData) => apiService.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),
  },

  // Kullanıcı işlemleri
  users: {
    getCurrentUser: () => apiService.request('/users/me'),
    updateProfile: (data) => apiService.request('/users/me', {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  },

  // Etkinlik işlemleri
  events: {
    getAll: (params) => apiService.request('/events' + this.buildQueryString(params)),
    getById: (id) => apiService.request(`/events/${id}`),
    create: (data) => apiService.request('/events', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  },
};

// Örnek kullanım:
try {
  // Login
  const loginResponse = await apiService.auth.login({
    email: 'user@example.com',
    password: 'password123'
  });
  
  // Token'ı sakla
  localStorage.setItem('token', loginResponse.data.token);
  
  // Kullanıcı bilgilerini al
  const userResponse = await apiService.users.getCurrentUser();
  
  // Etkinlikleri listele
  const eventsResponse = await apiService.events.getAll({
    page: 0,
    size: 10,
    sort: 'createdAt,desc'
  });
} catch (error) {
  console.error('Error:', error.message);
}
```

### 6. State Yönetimi Önerisi

```javascript
// Zustand ile state yönetimi örneği
import create from 'zustand';

const useStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  token: null,
  
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setToken: (token) => set({ token }),
  logout: () => set({ user: null, isAuthenticated: false, token: null }),
}));

export default useStore;
```

### 7. Protected Route Örneği

```javascript
// components/ProtectedRoute.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useStore from '../stores/useStore';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated]);

  return isAuthenticated ? children : null;
};

export default ProtectedRoute;
``` 