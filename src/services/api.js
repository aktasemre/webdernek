const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

// API istekleri için yardımcı fonksiyon
async function fetchApi(endpoint, options = {}) {
  const token = sessionStorage.getItem('token');
  console.log('Using token:', token);

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token,
        ...options.headers,
      }
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      if (response.status === 401) {
        console.log('Unauthorized, clearing session...');
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
        window.location.href = '/auth/login';
        throw new Error('Oturum süresi doldu');
      }
      const error = await response.json();
      throw new Error(error.message || 'Bir hata oluştu');
    }

    const responseData = await response.json();
    console.log('Response data:', responseData);
    
    // ResponseMessage wrapper'ından data'yı çıkar
    return responseData.data;
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
}

// Auth servisi
export const authService = {
  login: async (credentials) => {
    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(credentials),
        credentials: 'include'
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Giriş başarısız');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  register: async (userData) => {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Kayıt başarısız');
      }

      const data = await response.json();
      
      if (data.accessToken) {
        const token = `Bearer ${data.accessToken}`;
        sessionStorage.setItem('token', token);

        const user = {
          id: data.userId,
          email: data.email,
          role: data.role,
          tokenType: data.tokenType
        };
        sessionStorage.setItem('user', JSON.stringify(user));

        return data;
      } else {
        throw new Error('Token alınamadı');
      }
    } catch (error) {
      console.error('Register error:', error);
      throw error;
    }
  },

  logout: () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    window.location.href = '/auth/login';
  }
};

// Kullanıcı servisleri
export const userService = {
  // Tüm kullanıcıları getir
  getAll: async (filters = {}) => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) {
        throw new Error('Oturum bulunamadı');
      }

      const queryParams = new URLSearchParams(filters).toString();
      const response = await fetch(`${API_URL}/users?${queryParams}`, {
        method: 'GET', // Metodu belirtiyoruz
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        credentials: 'include' // CORS için gerekli
      });

      console.log('Users API Response:', response);

      if (!response.ok) {
        if (response.status === 401) {
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('user');
          window.location.href = '/auth/login';
          throw new Error('Oturum süresi doldu');
        }
        if (response.status === 403) {
          throw new Error('Bu işlem için yetkiniz yok');
        }
        throw new Error('Kullanıcı listesi alınamadı');
      }

      const data = await response.json();
      console.log('Users API Data:', data);

      // Backend'den gelen veriyi kontrol et
      if (Array.isArray(data)) {
        return data;
      } else if (data.data && Array.isArray(data.data)) {
        return data.data;
      } else {
        console.warn('Unexpected data format:', data);
        return [];
      }
    } catch (error) {
      console.error('Kullanıcılar getirilirken hata:', error);
      throw error;
    }
  },

  // Tek kullanıcı getir
  getById: async (id) => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) {
        throw new Error('Oturum bulunamadı');
      }

      const response = await fetch(`${API_URL}/users/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Kullanıcı bilgileri alınamadı');
      }

      const data = await response.json();
      console.log('User data:', data);

      // Backend'den gelen veriyi kontrol et
      if (data?.data) {
        return data.data;
      } else if (data) {
        return data;
      } else {
        throw new Error('Kullanıcı bulunamadı');
      }
    } catch (error) {
      console.error('Get user error:', error);
      throw error;
    }
  },

  // Mevcut kullanıcı bilgilerini getir
  getCurrentUser: async () => {
    return fetchApi('/users/me');
  },

  // Kullanıcı oluştur
  create: async (userData) => {
    try {
      console.log('Register request:', userData);
      
      if (userData.password !== userData.confirmPassword) {
        throw new Error('Şifreler eşleşmiyor');
      }

      // Telefon numarası formatını düzelt
      const formattedPhone = userData.phoneNumber?.replace(/[^0-9]/g, '');

      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          password: userData.password,
          confirmPassword: userData.confirmPassword,
          phoneNumber: formattedPhone, // Formatlanmış telefon
          address: userData.address,
          birthDate: userData.birthDate,
          gender: userData.gender
        })
      });

      console.log('Register response:', response);

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Üye kaydı başarısız');
      }

      const data = await response.json();
      console.log('Register data:', data);

      return data;
    } catch (error) {
      console.error('Register error:', error);
      throw error;
    }
  },

  // Kullanıcı güncelle
  update: async (id, userData) => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) {
        throw new Error('Oturum bulunamadı');
      }

      const response = await fetch(`${API_URL}/users/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Kullanıcı güncellenemedi');
      }

      const data = await response.json();
      console.log('Update response:', data);

      return data?.data || data;
    } catch (error) {
      console.error('Update error:', error);
      throw error;
    }
  },

  // Kullanıcı sil
  delete: async (id) => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) {
        throw new Error('Oturum bulunamadı');
      }

      const response = await fetch(`${API_URL}/users/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Kullanıcı silinemedi');
      }

      return true;
    } catch (error) {
      console.error('Delete error:', error);
      throw error;
    }
  },

  // Kullanıcı ara
  search: async (params) => {
    const queryParams = new URLSearchParams(params).toString();
    return fetchApi(`/users/search?${queryParams}`);
  },

  // Kullanıcı durumunu değiştir
  changeStatus: async (id, action) => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) {
        throw new Error('Oturum bulunamadı');
      }

      const response = await fetch(`${API_URL}/users/${action}/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Durum değiştirilemedi');
      }

      return true;
    } catch (error) {
      console.error('Status change error:', error);
      throw error;
    }
  },

  // Kullanıcı rolünü değiştir
  changeRole: async (id, newRole) => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) {
        throw new Error('Oturum bulunamadı');
      }

      const response = await fetch(`${API_URL}/users/${id}/role`, {
        method: 'PUT',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role: newRole })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Rol değiştirilemedi');
      }

      return true;
    } catch (error) {
      console.error('Role change error:', error);
      throw error;
    }
  }
};

// Haber servisleri
export const newsService = {
  getAll: async () => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) throw new Error('Oturum bulunamadı');

      const response = await fetch(`${API_URL}/news`, {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        if (response.status === 401) {
          sessionStorage.removeItem('token');
          window.location.href = '/auth/login';
          throw new Error('Oturum süresi doldu');
        }
        throw new Error('Haberler alınamadı');
      }

      const data = await response.json();
      return data?.data || [];
    } catch (error) {
      console.error('Haberler getirilirken hata:', error);
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) throw new Error('Oturum bulunamadı');

      const response = await fetch(`${API_URL}/news/${id}`, {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Haber bulunamadı');
      }

      const data = await response.json();
      return data?.data;
    } catch (error) {
      console.error('Haber getirilirken hata:', error);
      throw error;
    }
  },

  create: async (newsData) => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) throw new Error('Oturum bulunamadı');

      const response = await fetch(`${API_URL}/news`, {
        method: 'POST',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newsData)
      });

      if (!response.ok) throw new Error('Haber oluşturulamadı');

      const data = await response.json();
      return data?.data;
    } catch (error) {
      console.error('Haber oluşturulurken hata:', error);
      throw error;
    }
  },

  update: async (id, newsData) => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) throw new Error('Oturum bulunamadı');

      const response = await fetch(`${API_URL}/news/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newsData)
      });

      if (!response.ok) throw new Error('Haber güncellenemedi');

      const data = await response.json();
      return data?.data;
    } catch (error) {
      console.error('Haber güncellenirken hata:', error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) throw new Error('Oturum bulunamadı');

      const response = await fetch(`${API_URL}/news/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) throw new Error('Haber silinemedi');

      return true;
    } catch (error) {
      console.error('Haber silinirken hata:', error);
      throw error;
    }
  },

  publish: async (id) => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) throw new Error('Oturum bulunamadı');

      const response = await fetch(`${API_URL}/news/${id}/publish`, {
        method: 'PUT',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) throw new Error('Haber yayınlanamadı');

      return true;
    } catch (error) {
      console.error('Haber yayınlanırken hata:', error);
      throw error;
    }
  }
};

// Etkinlik servisleri
export const eventService = {
  getAll: async () => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) throw new Error('Oturum bulunamadı');

      const response = await fetch(`${API_URL}/events`, {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        if (response.status === 401) {
          sessionStorage.removeItem('token');
          window.location.href = '/auth/login';
          throw new Error('Oturum süresi doldu');
        }
        throw new Error('Etkinlikler alınamadı');
      }

      const data = await response.json();
      return data?.data || [];
    } catch (error) {
      console.error('Etkinlikler getirilirken hata:', error);
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) throw new Error('Oturum bulunamadı');

      const response = await fetch(`${API_URL}/events/${id}`, {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) throw new Error('Etkinlik bulunamadı');

      const data = await response.json();
      return data?.data;
    } catch (error) {
      console.error('Etkinlik getirilirken hata:', error);
      throw error;
    }
  },

  create: async (eventData) => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) throw new Error('Oturum bulunamadı');

      const response = await fetch(`${API_URL}/events`, {
        method: 'POST',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData)
      });

      if (!response.ok) throw new Error('Etkinlik oluşturulamadı');

      const data = await response.json();
      return data?.data;
    } catch (error) {
      console.error('Etkinlik oluşturulurken hata:', error);
      throw error;
    }
  },

  update: async (id, eventData) => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) throw new Error('Oturum bulunamadı');

      const response = await fetch(`${API_URL}/events/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData)
      });

      if (!response.ok) throw new Error('Etkinlik güncellenemedi');

      const data = await response.json();
      return data?.data;
    } catch (error) {
      console.error('Etkinlik güncellenirken hata:', error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) throw new Error('Oturum bulunamadı');

      const response = await fetch(`${API_URL}/events/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) throw new Error('Etkinlik silinemedi');

      return true;
    } catch (error) {
      console.error('Etkinlik silinirken hata:', error);
      throw error;
    }
  }
}; 