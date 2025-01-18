# Arslandede Köyü Derneği Web Projesi Dokümantasyonu

## 1. Proje Genel Bakış

### 1.1 Amaç

Bu proje, Arslandede Köyü Derneği'nin web sitesini modern ve kullanıcı dostu bir yapıya kavuşturmayı amaçlamaktadır.

### 1.2 Teknolojiler

- Frontend: Next.js, React
- Stil: SCSS Modules
- Backend: (Planlanıyor)
- Veritabanı: (Planlanıyor)

## 2. Frontend Yapısı

### 2.1 Ana Bileşenler

1. **Header/Navbar**

   - Logo
   - Navigasyon menüsü
   - Arama fonksiyonu
   - Responsive tasarım

2. **Ana Sayfa**

   - Hero bölümü
   - Haber slider'ı
   - Öne çıkan projeler
   - Etkinlik takvimi
   - Hızlı erişim butonları

3. **Haberler Bölümü**

   - Haber listesi
   - Kategori filtreleme
   - Arama fonksiyonu
   - Haber detay sayfası

4. **Projeler Bölümü**

   - Proje kategorileri
   - Proje listesi
   - Filtreleme (Devam eden, tamamlanan, planlanan)
   - Proje detay sayfası

5. **Bağış Sayfası**

   - Banka hesap bilgileri
   - Aktif kampanyalar
   - İlerleme göstergeleri

6. **Kültür Sayfaları**
   - Atasözleri ve deyimler
   - Köy tarihi
   - Coğrafi bilgiler

### 2.2 Veri Yönetimi

- JSON dosyaları ile statik veri yönetimi
- Dinamik sayfa oluşturma
- SEO optimizasyonu için metadata yönetimi

## 3. Backend İhtiyaçları

### 3.1 API Endpoints

1. **Kullanıcı Yönetimi**

```javascript
POST / api / auth / login;
POST / api / auth / register;
POST / api / auth / logout;
GET / api / auth / user;
```

2. **Haberler**

```javascript
GET /api/news
GET /api/news/:id
POST /api/news
PUT /api/news/:id
DELETE /api/news/:id
```

3. **Projeler**

```javascript
GET /api/projects
GET /api/projects/:id
POST /api/projects
PUT /api/projects/:id
DELETE /api/projects/:id
```

4. **Bağışlar**

```javascript
GET /api/donations
POST /api/donations
GET /api/donations/campaigns
PUT /api/donations/campaigns/:id
```

### 3.2 Veritabanı Şeması

1. **Users**

```sql
CREATE TABLE users (
  id INT PRIMARY KEY,
  username VARCHAR(50),
  email VARCHAR(100),
  password VARCHAR(255),
  role VARCHAR(20),
  created_at TIMESTAMP
);
```

2. **News**

```sql
CREATE TABLE news (
  id INT PRIMARY KEY,
  title VARCHAR(200),
  content TEXT,
  image_url VARCHAR(255),
  category VARCHAR(50),
  author_id INT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

3. **Projects**

```sql
CREATE TABLE projects (
  id INT PRIMARY KEY,
  title VARCHAR(200),
  description TEXT,
  status VARCHAR(20),
  category VARCHAR(50),
  budget DECIMAL,
  progress INT,
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMP
);
```

4. **Donations**

```sql
CREATE TABLE donations (
  id INT PRIMARY KEY,
  campaign_id INT,
  amount DECIMAL,
  donor_name VARCHAR(100),
  donor_email VARCHAR(100),
  status VARCHAR(20),
  created_at TIMESTAMP
);
```

### 3.3 Güvenlik Gereksinimleri

1. JWT tabanlı kimlik doğrulama
2. Role-based access control (RBAC)
3. API rate limiting
4. Input validation ve sanitization
5. CORS politikası
6. SSL/TLS kullanımı

## 4. Deployment

### 4.1 Frontend Deployment

- Vercel platformu üzerinde hosting
- Otomatik CI/CD pipeline
- Environment variables yönetimi

### 4.2 Backend Deployment

- Node.js runtime
- PM2 process manager
- Nginx reverse proxy
- Docker container
- Database backup sistemi

## 5. Performans Optimizasyonu

### 5.1 Frontend

1. Image optimization
2. Code splitting
3. Lazy loading
4. Caching stratejileri
5. Bundle size optimizasyonu

### 5.2 Backend

1. Database indexing
2. Query optimization
3. Caching (Redis)
4. Load balancing
5. Rate limiting

## 6. Monitoring ve Logging

### 6.1 Frontend Monitoring

1. Google Analytics
2. Error tracking
3. Performance monitoring
4. User behavior analytics

### 6.2 Backend Monitoring

1. Server health monitoring
2. API performance metrics
3. Error logging
4. Database monitoring
5. Security monitoring

## 7. Bakım ve Güncelleme

### 7.1 Düzenli Bakım Görevleri

1. Güvenlik güncellemeleri
2. Dependency updates
3. Database backup
4. Performance optimization
5. Content updates

### 7.2 Geliştirme Süreci

1. Version control (Git)
2. Code review süreci
3. Testing stratejisi
4. Documentation güncelleme
5. Deployment checklist
