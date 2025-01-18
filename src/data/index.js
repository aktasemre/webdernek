// Veri importları
import haberlerData from './haberler.data.json';
import projelerData from './projeler.data.json';
import etkinliklerData from './etkinlikler.data.json';
import iletisimData from './iletisim.data.json';
import donationData from './donation.data.js';

// Veri normalizasyon fonksiyonu
const normalizeData = (data) => ({
  ...data,
  baslik: data.title || data.baslik,
  aciklama: data.description || data.summary || data.aciklama,
  icerik: data.content || data.icerik,
  resim: data.image || data.resim,
  tarih: data.date || data.tarih,
  durum: data.status || data.durum,
});

// Veri getirme fonksiyonları
export const getHaberler = () => haberlerData.haberler?.map(normalizeData) || [];
export const getProjeler = () => projelerData.projects?.map(normalizeData) || [];
export const getEtkinlikler = () => etkinliklerData?.map(normalizeData) || [];
export const getIletisim = () => iletisimData || {};
export const getDonations = () => donationData || [];

// Proje kategorileri
export const getProjeKategorileri = () => projelerData.categories || [];

// Global arama fonksiyonu
export const searchContent = (query = '') => {
  const normalizedQuery = query.toLowerCase().trim();
  
  if (!normalizedQuery) return [];

  const results = [
    ...getHaberler().map(item => ({ ...item, type: 'haber' })),
    ...getProjeler().map(item => ({ ...item, type: 'proje' })),
    ...getEtkinlikler().map(item => ({ ...item, type: 'etkinlik' })),
  ];

  return results.filter(item => 
    item.baslik?.toLowerCase().includes(normalizedQuery) ||
    item.aciklama?.toLowerCase().includes(normalizedQuery) ||
    item.icerik?.toLowerCase().includes(normalizedQuery),
  );
}; 