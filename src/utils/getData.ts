const data = require('../data/static/data_tr.json');

const isArrayKey = (key) => {
  return ['duyurular', 'etkinlikler', 'haberler', 'projeler'].includes(key);
};

const getData = (key) => {
  try {
    if (!data) {
      throw new Error('Veri dosyası yüklenemedi');
    }

    const value = data[key];
    if (value === undefined || value === null) {
      console.warn(`'${String(key)}' için veri bulunamadı, boş değer döndürülüyor`);
      
      return isArrayKey(key) ? [] : {};
    }

    return value;
  } catch (error) {
    console.error('Veri alınırken hata:', error);
    return isArrayKey(key) ? [] : {};
  }
};

const getAllData = () => {
  try {
    if (!data) {
      throw new Error('Veri dosyası yüklenemedi');
    }
    return data;
  } catch (error) {
    console.error('Tüm veriler alınırken hata:', error);
    return {};
  }
};

// Özel veri getirme fonksiyonları
const getAboutData = () => getData('about');
const getKoyData = () => getData('koy');
const getDuyurular = () => getData('duyurular');
const getEtkinlikler = () => getData('etkinlikler');
const getHaberler = () => getData('haberler');
const getProjeler = () => getData('projeler');
const getIstatistikler = () => getData('istatistikler');

module.exports = {
  getData,
  getAllData,
  getAboutData,
  getKoyData,
  getDuyurular,
  getEtkinlikler,
  getHaberler,
  getProjeler,
  getIstatistikler
}; 