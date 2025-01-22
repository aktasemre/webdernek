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

// Genel veri getirme fonksiyonu
const getData = (data, key = null) => {
  const items = key ? data[key] : data;
  return Array.isArray(items) ? items.map(normalizeData) : [];
};

// Veri getirme fonksiyonları
export const getHaberler = () => getData(haberlerData, 'haberler');
export const getProjeler = () => getData(projelerData, 'projects');
export const getEtkinlikler = () => getData(etkinliklerData);
export const getIletisim = () => iletisimData;
export const getDonations = () => donationData;

// Proje kategorileri
export const getProjeKategorileri = () => projelerData.categories || [];

// Global arama fonksiyonu
export const searchContent = (query = '') => {
  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery) return [];

  const results = [
    ...getHaberler().map((item) => ({ ...item, type: 'haber' })),
    ...getProjeler().map((item) => ({ ...item, type: 'proje' })),
    ...getEtkinlikler().map((item) => ({ ...item, type: 'etkinlik' })),
  ];

  return results.filter(
    (item) =>
      item.baslik?.toLowerCase().includes(normalizedQuery) ||
      item.aciklama?.toLowerCase().includes(normalizedQuery) ||
      item.icerik?.toLowerCase().includes(normalizedQuery),
  );
};
