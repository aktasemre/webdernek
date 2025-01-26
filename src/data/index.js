// Veri importları
import haberlerData from './haberler.data.json';
import projelerData from './projeler.data.json';
import etkinliklerData from './etkinlikler.data.json';
import iletisimData from './iletisim.data.json';
import donationData from './donation.data.js';

// Merkezi veri yönetimi
import * as associationData from './association.data.json';
import * as villageData from './village.data.json';
import * as eventsData from './events.data.json';
import * as newsData from './haberler.data.json';
import * as projectsData from './projeler.data.json';

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
export const getData = (key) => {
  const dataMap = {
    association: associationData,
    village: villageData,
    events: eventsData,
    news: newsData,
    projects: projectsData
  };
  
  return dataMap[key] || null;
};

// Veri getirme fonksiyonları
export const getHaberler = () => getData('news')?.haberler || [];
export const getProjeler = () => getData('projects')?.projects || [];
export const getEtkinlikler = () => getData('events')?.events || [];
export const getIletisim = () => iletisimData;
export const getDonations = () => donationData;

// Proje kategorileri
export const getProjeKategorileri = () => projelerData.categories || [];

// Global arama fonksiyonu
export const searchContent = (query = '') => {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return [];

  return [
    ...getHaberler().map(item => ({...item, type: 'haber'})),
    ...getProjeler().map(item => ({...item, type: 'proje'})),
    ...getEtkinlikler().map(item => ({...item, type: 'etkinlik'}))
  ].filter(item => 
    item.title?.toLowerCase().includes(normalizedQuery) ||
    item.description?.toLowerCase().includes(normalizedQuery) ||
    item.content?.toLowerCase().includes(normalizedQuery)
  );
};
