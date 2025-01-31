// Veri importları
import projelerData from './projeler.data.json';
import iletisimData from './iletisim.data.json';
import donationData from './donation.data.js';

// Merkezi veri yönetimi
import * as associationData from './association.data.json';
import * as villageData from './village.data.json';
import * as eventsData from './events.data.json';
import * as newsData from './haberler.data.json';
import * as projectsData from './projeler.data.json';

// Temel veri exportları
export { default as menuItems } from './menu.data.js';
export { default as projectsData } from './projects.data.js';
export { default as foundersData } from './founders.data.js';
export { default as writersData } from './writers.data.js';
export { default as supervisoryData } from './supervisory.data.js';
export { default as placesData } from './places.data.js';
export { default as membersData } from './members.data.js';
export { default as wordsData } from './words.data.js';
export { default as proverbsData } from './proverbs.data.js';
export { default as galleryData } from './gallery.data.js';
export { default as boardData } from './board.data.js';

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
